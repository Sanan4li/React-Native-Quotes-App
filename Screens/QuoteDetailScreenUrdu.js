import React, { Component } from 'react';
import {View, StyleSheet, Text, AppState ,Image, Clipboard, ImageBackground, Modal, TouchableOpacity,PermissionsAndroid } from "react-native";
import MyHeaderButton from "./MyHeaderButton";
import CameraRoll from "@react-native-community/cameraroll";
import MyHeaderButtonNew from "./MyHeaderButtonNew";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from "react-native-vector-icons/Fontisto";
import ViewShot from "react-native-view-shot";
import Toast, {DURATION} from 'react-native-easy-toast';
import SendNotification from "./SendNotification";
import Ad from "./Ad";
import { openDatabase } from 'react-native-sqlite-storage';
 class QuoteDetailScreenUrdu extends Component {
    static navigationOptions = ({ navigation }) => {
      
      };
      state = {
        likeText : "Likes",
        likeColor:"white",
        image :null,
        modalVisible:false,
        currentQuote:null,

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
             
            });
          } else {
            this.refs.toast.show('Saving Failed! Storage Permission Required.');
          }
        } catch (err) {
          console.warn(err);
        }
      }

     


     
      copyText = (quote)=>{
         Clipboard.setString(quote);
        this.refs.toast.show('Copied to Clipboard!');
    }
    saveImage = ()=>{
      console.log(this.state.image)
      CameraRoll.saveToCameraRoll(this.state.image);
      this.refs.toast.show('Saved to Gallery');
  }

  insert = (id, category, body, by)=>{
      console.log("test");
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


    render() {
      let sharedNumber = this.props.navigation.getParam("likes");
      let likesNumber = this.props.navigation.getParam("shares");
      let quote = this.props.navigation.getParam("body"); // 
      let by = this.props.navigation.getParam("by");
      let id = this.props.navigation.getParam("id");
      let category = this.props.navigation.getParam("category");
        return (

           <View style={{backgroundColor:"#1a1a1a", flex:1}}>
                <SendNotification/>
              <View style={{ height:"62%"}}>
                <View style={{alignItems:"center"}}>
                <Ad size="Banner"/>
                </View>
              <ViewShot ref="viewShot" options={{  format: "jpg" , quality: 0.9 }}>
              <View style={{marginTop:"5%", padding:10}}>
              <View style={{marginLeft:"90%"}}>
                <Image source={require("../assets/images/download.png")} style={{width:30, height:30}} />
               
                </View> 
                <Text style={styles.quoteText} numberOfLines={8}>
                {quote}
                </Text>
                <View style={{alignItems:"flex-start", marginLeft:20, paddingBottom:10}}>
                    <Text style={styles.author}>
                       {by}
                    </Text>
                </View>
                </View>
            </ViewShot>
                <View style={{flexDirection:"row", marginTop:5}}>
                   <Icon color="white" size={17} name="share-alt" style={{marginTop:4, marginLeft:20}}/>
                    <Text style={{color:"white", fontSize:16, marginLeft:10}}>{sharedNumber} Shared</Text>
                   <TouchableOpacity style={{flexDirection:"row"}}
                   onPress={
                       ()=>{ if(this.state.likeColor=="white"){
                        this.insert(id,category,quote,by);
                        this.setState({
                            likeColor:"#ff1a75",
                            likeText:"Liked"
                        });
                       }
                       else{
                        this.setState({
                            likeColor:"white",
                            likeText:"Likes"
                        });
                       
                       }
                           
                       }
                   }
                   >
                   <Fontisto color={this.state.likeColor} size={17} name="heart" style={{marginTop:4, marginLeft:20}}/>
                 <Text style={{color:this.state.likeColor, fontSize:16, marginLeft:10}}>{likesNumber} {this.state.likeText}</Text>
                   </TouchableOpacity>
                </View>
              </View>
              <View style={{ height:"40%", alignItems:"center"}}>
              <TouchableOpacity style={styles.button} onPress={
                ()=>{
                  this.props.navigation.navigate("ShareScreenUrdu", {body: quote, by:by});
                }
              }>
              <View style={{ width:"50%"}}>
                <Text style={styles.buttonText}> Share Options</Text>
                </View>
                <View style={{ width:"20%",}}>
                <Icon name="share" color="white"size={25} style={{alignSelf:"center"}}/>
                </View>
                
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}  onPress={()=>{
                this.copyText(quote+" "+by);
              } }>
              <View style={{ width:"50%"}}>
                <Text style={styles.buttonText}> Copy as Text</Text>
                </View>
                <View style={{ width:"20%"}}>
                <Icon name="copy" color="white"size={25} style={{alignSelf:"center"}}/>
                </View>
               
              </TouchableOpacity>
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
              <View style={{alignItems:"center", padding:5}}>
          

           </View>
              </View>

             


              <Toast ref="toast"  style={{backgroundColor:'#38b750'}}
                    position="top"
                    positionValue={150}
                    fadeInDuration={850}
                    fadeOutDuration={850}
                    opacity={1}
                    textStyle={{color:'white'}} />
           </View>
        )
    }
}
const styles = StyleSheet.create({
    button : {
        width:"90%",
        height:"20%",
        backgroundColor:"#38b750",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:10,
        flexDirection:"row",
    },
    buttonText: {
        color:"white",
        alignContent:"center",
        fontSize:20,
        alignSelf:"center"
    },
  quoteText:{
    color:"white",
    fontFamily:"urdu", 
    fontSize:23, 
    marginRight:10,
    paddingHorizontal:20,
  },
  author : {
    color:"#66ff66", 
    paddingRight:10, 
    fontSize:22, 
    paddingBottom:10,
    fontFamily:"urdu",
  }
});
export default QuoteDetailScreenUrdu;
