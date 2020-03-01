import React, {Component} from "react";
import {StyleSheet, View, Image, TouchableOpacity, FlatList, Alert, Clipboard , Text, Modal, PermissionsAndroid, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from "react-native-vector-icons/Fontisto";
import Toast, {DURATION} from 'react-native-easy-toast';
import ViewShot from "react-native-view-shot";
import Entypo from "react-native-vector-icons/Entypo";
import CameraRoll from "@react-native-community/cameraroll";
import Ad from "./Ad";
import QuotesData from "./QuotesData";
import SendNotification from "./SendNotification";
import { openDatabase } from 'react-native-sqlite-storage';

class QuotesListScreenUrdu extends Component{
    // static navigationOptions = {
    //     title: 'Home',
    //     headerStyle: {
    //       backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //     },
    //   };
    
    
    static navigationOptions = ({ navigation }) => {
          
        return {
              headerTitleStyle: {
                fontFamily: "urdu",
              },
            title : navigation.getParam("title"),
        };
      };
      
      state = {
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

      insert = (id, category, body, by)=>{
      
        var db = openDatabase({ name: 'test.db' });
        this.refs.toast.show('Added to Favourites!');
              db.transaction(function(tx) {
                tx.executeSql(
                  'INSERT INTO fav (id, category , body, by) VALUES (?,?,?,?)',
                  [id, category, body, by],
                  (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                       console.log("Inserted");
                    } else {
                     console.log("Error in Inserting Data");
                    }
                  }
                );
              });
            } 
    




  
  
    render(){
       //console.log(this.state.data[0].body);
        return(
            <View style={styles.main}>
                <SendNotification/>
             <View style={{height:"90%"}}> 

          <FlatList 
           
           data={this.state.selectedData}
           renderItem={(data)=>{
              
            return(
                <TouchableOpacity
                onPress={
                    ()=>{
                      let sharedNumber = Math.floor(Math.random() * (999 - 1 + 1) + 1);
                      let likesNumber = Math.floor(Math.random() * (500 - 1 + 1) + 1);
                        this.props.navigation.navigate("QuoteDetailScreenUrdu", {id:data.item.id, category:data.item.category,body:data.item.body, by:data.item.by,likes:likesNumber, shares:sharedNumber});
                    }
                }
                
                style={{  backgroundColor:"#262626",  marginTop:5, borderRadius:5, padding:20, }}> 
               
                 <View>
                 
                <View style={{marginLeft:"90%"}}>
                <Image source={require("../assets/images/download.png")} style={{width:30, height:30}} />
               
                </View>
                 <Text style={{fontFamily:"urdu", fontSize:23, color:"white",marginRight:15,}}>
                     { data.item.body }
                  </Text>
                  </View>
                  <View style={{alignItems:"flex-start", marginTop:5, marginLeft:10}}>
                  <Text style={{color:"#66ff66",fontFamily:"urdu", fontSize:22}}>
                    {data.item.by}
                  </Text>
                 </View>
                 <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:30, width:"100%", padding:5}}>
                     
                <TouchableOpacity style={{ width:"25%", padding:5,}}
                onPress={
                    ()=>{
                        this.insert(data.item.id,data.item.category, data.item.body, data.item.by);
                    }
                }
                >
                <Fontisto color="white" size={20} name="heart" style={{alignSelf:"center"}} />
                </TouchableOpacity>
               <TouchableOpacity  style={{width:"25%",padding:5}} onPress={()=>{
                   this.copyText(data.item.body+" "+data.item.by);
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
                       this.props.navigation.navigate("ShareScreenUrdu", {body: data.item.body, by:data.item.by});
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
          <Ad size="Banner"/>

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
                 
              <Ad size="largeBanner"/>
             


              </View>
              <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>

          <View style={{marginTop:"5%", padding:10,}}>
                 
          <View style={{marginLeft:"90%"}}>
                <Image source={require("../assets/images/download.png")} style={{width:30, height:30}} />
               
                </View>
                 <Text style={{fontFamily:"urdu", fontSize:23, color:"white",marginRight:10,paddingHorizontal:20,}}>
                {this.state.currentQuote}
               </Text>
                <View style={{alignItems:"flex-start", marginRight:10, paddingBottom:10}}>
                    <Text style={{color:"#66ff66",fontFamily:"urdu", marginLeft:20, fontSize:22, paddingBottom:10}}>
                     {this.state.currentQuoteBy}
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
  
})
export default QuotesListScreenUrdu;