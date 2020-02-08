import React, {Component} from "react";
import {StyleSheet, View, Image, TouchableOpacity, FlatList, Clipboard , Text, Modal, PermissionsAndroid, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from "react-native-vector-icons/Fontisto";
import Toast, {DURATION} from 'react-native-easy-toast';
import ViewShot from "react-native-view-shot";
import Entypo from "react-native-vector-icons/Entypo";
import CameraRoll from "@react-native-community/cameraroll";
import { NavigationEvents } from 'react-navigation';
import SendNotification from "./SendNotification";
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
  } from 'react-native-admob';
import { openDatabase } from 'react-native-sqlite-storage';
import MyHeaderButton from "./MyHeaderButton";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
 class FavScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
         
          headerLeft : 
              <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
               <Item title="Favourtie" iconName="bars" 
               onPress={()=>{
                navigation.openDrawer();
               }}
               
                />
             </HeaderButtons>
               
            
        };
      };
      state = {
       
        // data : QuotesData,
         selectedData: null,
         modalVisible:false,
         currentQuote:null,
         currentQuoteBy:null,
     FlatListItems: [],
   }
   componentDidMount = ()=>{
       console.log("ComponentDidMount Called");
    this.getQuotes();
  } 
  getQuotes = ()=>{
    var db = openDatabase({ name: 'test.db' });
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM fav', [], (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          this.setState({
            FlatListItems: temp,
          });
        });
      });
  }
  copyText = (text)=>{
    Clipboard.setString(text);
    this.refs.toast.show('Copied to Clipboard!');
}

hideModal=()=>{
    this.setState({
        modalVisible:false
    });
}
getPermissions = async ()=>{

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
            title: "Needs Storage Permissions",
            message:
              "Quote App Needs Storage Permissions to Download/Share Files.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.refs.viewShot.capture().then(uri => {
          console.log("Converted to Image.. Saving to Phone's Gallery", uri);
        
          CameraRoll.saveToCameraRoll(uri);
          this.refs.toast.show('Saved to Gallery');
          this.hideModal();
        });
      } else {
        this.refs.toast.show('Saving Failed! Storage Permission Required.');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  deleteQuote = (id) => {
    var db = openDatabase({ name: 'test.db' });
    var that = this;
   
    console.log(id);
    db.transaction(tx => {
       
      tx.executeSql(
        'DELETE FROM  fav where id=?',
        [id],
        (tx, results) => {
            
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            this.refs.toast.show('Deleted From Favourites!');
            this.getQuotes();
          } else {
            this.refs.toast.show('Error in Deleting!');
          }
        }
      );
    });
  };

    render() {
        let view = null;
        if(this.state.FlatListItems.length==0){
            console.log("List is Empty");
            view = <View style={{ alignItems:"center"}}>
                 <Text style={{color:"white", fontSize:20}}>No Quote in Favourites!</Text>
            </View>
        }
        return (
            <View style={styles.main}>
                <NavigationEvents
                onDidFocus={() => {
                  this.getQuotes()
                }}
                />
            <View style={{height:"90%"}}> 
            {view}
            <SendNotification/>
         <FlatList 
          keyExtractor={item => item.id}
          data={this.state.FlatListItems}
          renderItem={(data)=>{
             
           return(
               <TouchableOpacity
               onPress={
                   ()=>{
                    this.props.navigation.navigate("Detail", {id:data.item.id, category:data.item.category,body:data.item.body, by:data.item.by});
                   }
               }
               
               style={{  backgroundColor:"#262626",  marginTop:5, borderRadius:5, padding:20, }}> 
              
                <View>
                
                <Image source={require("../assets/images/quotesIcon.png")} style={{width:30, height:30}} />
              
                <Text style={{fontFamily:"KulimPark-Light", fontWeight:"bold", fontSize:18, color:"white"}}>
                    { data.item.body }
                 </Text>
                 </View>
                 <View style={{alignItems:"flex-end", marginTop:5}}>
                 <Text style={{color:"#66ff66"}}>
                  ~ {data.item.by}
                 </Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:30, width:"100%", padding:5}}>
                    
               <TouchableOpacity style={{ width:"25%", padding:5,}} onPress={
                   ()=>{
                       this.deleteQuote(data.item.id);
                   }
               }>
               <Fontisto color="white" size={20} name="trash" style={{alignSelf:"center"}} />
               </TouchableOpacity>
              <TouchableOpacity  style={{width:"25%",padding:5}} onPress={()=>{
                  this.copyText(data.item.body);
              } }>
              <Icon name="copy" color="white"size={20} style={{alignSelf:"center"}}/>
              </TouchableOpacity>
              <TouchableOpacity  style={{ width:"25%",padding:5}} onPress={
                 
                  ()=>{
                      this.setState({
                          modalVisible:true,
                          currentQuote:data.item.body,
                          currentQuoteBy: data.item.by
                      })
                      
                  }
              }>
              <Icon name="download" color="white"size={20} style={{alignSelf:"center"}}/>
              </TouchableOpacity>
              <TouchableOpacity  style={{ width:"25%",padding:5}} onPress={
                  ()=>{
                      this.props.navigation.navigate("Share", {body: data.item.body, by:data.item.by});
                  }
              }>
              <Icon name="share" color="white"size={20} style={{alignSelf:"center"}}/>       
           </TouchableOpacity> 
               </View>
               
               </TouchableOpacity>
             )
          }}
          />

          </View>
          <View style={{alignItems:"center", padding:5}}>
          <AdMobBanner
               adSize="Banner"
               adUnitID="ca-app-pub-3898799702868990/4850565259"
               testDevices={[AdMobBanner.simulatorId]}
               onAdFailedToLoad={error => console.error(error)}
/>

          </View>

           <Modal
           
         animationType="slide"
         transparent={false}
         visible={this.state.modalVisible}
         onRequestClose={
             this.hideModal
         }>
           
         <View style={styles.modal}>
              <View style={{backgroundColor:"#1a1a1a", height:"30%", justifyContent:"center", alignItems:"center"}}>
                
                 <AdMobBanner
               adSize="largeBanner"
               adUnitID="ca-app-pub-3940256099942544/6300978111"
               testDevices={[AdMobBanner.simulatorId]}
               onAdFailedToLoad={error => console.error(error)}
/>
<AdMobBanner
               adSize="Banner"
               adUnitID="ca-app-pub-3940256099942544/6300978111"
               testDevices={[AdMobBanner.simulatorId]}
               onAdFailedToLoad={error => console.error(error)}
/>


             </View>
             <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>

         <View style={{marginTop:"5%", padding:10,}}>
                
               <Image source={require("../assets/images/quotesIcon.png")} style={{width:50, height:50}} />
               <Text style={{color:"white",fontFamily:"KulimPark-Light", fontSize:22, paddingHorizontal:20}} numberOfLines={8}>
               {this.state.currentQuote}
              </Text>
               <View style={{alignItems:"flex-end", marginRight:10, paddingBottom:10}}>
                   <Text style={{color:"#66ff66", paddingRight:10, fontSize:18, paddingBottom:10}}>
                   ~ {this.state.currentQuoteBy}
                   </Text>
               </View>
               </View>
                </ViewShot>
                <TouchableOpacity style={styles.button} onPress={
                   this.getPermissions
             }>
             <View style={{ width:"50%"}}>
              <Text style={styles.buttonText}>  Download Image </Text>
              </View>
              <View style={{ width:"20%"}}>
              <Icon name="download" color="white"size={25} style={{alignSelf:"center"}}/>
              </View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.button} onPress={
               this.hideModal
             }>
             <View style={{ width:"50%"}}>
              <Text style={styles.buttonText}>  Cancel </Text>
              </View>
              <View style={{ width:"20%"}}>
              <Entypo name="squared-cross" color="white"size={25} style={{alignSelf:"center"}}/>
              </View>
             </TouchableOpacity>
             
         </View>
      

       </Modal>
            <Toast ref="toast"  style={{backgroundColor:'#38b750'}}
                   position="top"
                   positionValue={150}
                   fadeInDuration={850}
                   fadeOutDuration={800}
                   opacity={1}
                   textStyle={{color:'white'}} />
       </View>
         
        )
    }
}

const styles = StyleSheet.create({
    main : {
        backgroundColor:"#1a1a1a",
        flex:1,
    },
    button : {
        width:"90%",
        height:"8%",
        backgroundColor:"#38b750",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:10,
        alignSelf:"center",
        flexDirection:"row",
    },
    buttonText: {
        color:"white",
        alignContent:"center",
        fontSize:20,
        alignSelf:"center",
    },
    modal:{ 
            backgroundColor:"#1a1a1a",
              flex: 1,
              flexDirection: 'column',
              width:"100%",
              height:"70%",
    }
});

export default FavScreen;
