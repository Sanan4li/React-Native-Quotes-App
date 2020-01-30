import React, {Component} from "react";
import {StyleSheet, View, Image, TouchableOpacity, FlatList, Clipboard , Text, Modal, PermissionsAndroid, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from "react-native-vector-icons/Fontisto";
import Toast, {DURATION} from 'react-native-easy-toast';
import ViewShot from "react-native-view-shot";
import Entypo from "react-native-vector-icons/Entypo";
import CameraRoll from "@react-native-community/cameraroll";
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
  } from 'react-native-admob';
import QuotesData from "./QuotesData";
class QuotesListScreen extends Component{

    static navigationOptions = ({ navigation }) => {
        return {
         title : navigation.getParam("title"),
        };
      };
      
      state = {
      entries : [
          {id: "1", liked:"false", title : "First", body: "imagination is everything. It is the preview of life's coming attractions.",
          image : "../assets/images/companyIcon.jpg" },
          {id: "2",liked:"false",title : "Second", body: "Life is like riding a bicycle. To keep your balance you must keep moving",image : "../assets/images/companyIcon.jpg" },
          {id: "3",liked:"false",title : "First", body: "The important thing is not to stop questioning. Curiosity has its own reason for existing",image : "../assets/images/companyIcon.jpg" },
          {id: "4",liked:"false",title : "Second", body: "No problem can be solved from the same level of consciousness that created it",image : "../assets/images/companyIcon.jpg" },
          {id: "5",liked:"false",title : "First", body: "Try not to become a man of success, but rather try to become a man of value.",image : "../assets/images/companyIcon.jpg" },
          ],
          data : QuotesData,
          selectedData: null,
          modalVisible:false,
          currentQuote:null,
          currentQuoteBy:null
          
    }
    componentDidMount = ()=>{
        let category = this.props.navigation.getParam("title");
        let data = this.state.data.filter(
            (d)=>{
                return d.category==category
            }
        );
        this.setState({
            selectedData:data
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
                  "Quote App Needs Storage Permissions to Share Files.",
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





  
  
    render(){
       //console.log(this.state.data[0].body);
        return(
            <View style={styles.main}>
             <View style={{height:"90%"}}> 
          <FlatList 
           
           data={this.state.selectedData}
           renderItem={(data)=>{
              
            return(
                <TouchableOpacity
                onPress={
                    ()=>{
                        this.props.navigation.navigate("Detail", {body:data.item.body, by:data.item.by});
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
                     
                <TouchableOpacity style={{ width:"25%", padding:5,}}>
                <Fontisto color="white" size={20} name="heart" style={{alignSelf:"center"}} />
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
                adUnitID="ca-app-pub-3940256099942544/6300978111"
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
          <View style={{backgroundColor:"#1a1a1a",alignItems:"center"}}>
         <AdMobBanner
                adSize="Banner"
                adUnitID="ca-app-pub-3940256099942544/6300978111"
                testDevices={[AdMobBanner.simulatorId]}
                onAdFailedToLoad={error => console.error(error)}
/>
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
  
})
export default QuotesListScreen;