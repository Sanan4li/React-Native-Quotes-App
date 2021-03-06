import React, { Component } from 'react'
import {StyleSheet, View, Text, Linking, TouchableOpacity, Image} from 'react-native';
import MyHeaderButton from "./MyHeaderButton";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import SendNotification from "./SendNotification";
import NetInfo from "@react-native-community/netinfo";
import email from 'react-native-email';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from 'react-native-vector-icons/Entypo';
 class CartScreen extends Component {
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
          connected:false,
      }
      componentDidMount = () => {
        
        } 

        openGithub = ()=>{
            // Linking.openURL('fb://page/110899427139639');
             Linking.openURL('http://www.github.com/sanan4li');
         }
        openFacebook = ()=>{
           // Linking.openURL('fb://page/110899427139639');
            Linking.openURL('fb://profile/100003097706527');
        }
        openTwitter = ()=>{
            const twitterUrlScheme = "twitter://user?screen_name=Sanan4li";
            Linking.canOpenURL(twitterUrlScheme)
    .then((supported) =>
        Linking.openURL(
            supported
                ? twitterUrlScheme
                : "https://www.twitter.com/Sanan4li"
            )
        )
        .catch((err) => console.error('An error occurred', err));
        }

        handleEmail = () => {
           
            
                const to = ['softwareengineer169@gmail.com'] // string or array of email addresses
                email(to, {
                    
                    subject: "Contacting from Quote App",
                    body: "Type Your Message: "
                }).catch(console.error)
            
          
        }
     
    render() {
        
     
      
         
        return (
            <View style={styles.main}>
             <View style={{backgroundColor:"#1a1a1a", height:"45%", width:"100%", justifyContent:"center", alignItems:"center",}}>
             <View style={{justifyContent:"center"}}>
                <Image source={require("../assets/images/my.jpg")} style={{width:130, height:130, borderRadius:500, borderColor:"#66ff66", borderWidth:1}}/>
                <Text style={{fontFamily:"KulimPark-Regular", color:"white", marginTop:10, fontSize:18 ,alignSelf:"center"}}>Sanan Ali</Text>
                </View>
          <View style={{flexDirection:"row", alignItems:"center", }}>
          <Icon name="location-pin" color="#66ff66" size={20} style={{marginTop:5}} />
            <Text style={{fontFamily:"KulimPark-Regular", color:"white", fontSize:15, marginTop:5, marginLeft:5 , alignSelf:"center"}}>Pakistan</Text>
          </View>
             </View>

             <View style={{margin:14}}>
                 <Text style={{fontSize:20, fontFamily:"KulimPark-Light", fontWeight:"bold"}}>About Me</Text>
                 <Text style={{ fontSize:15, color:"#666666"}}>I am a Software Engineer, currently working as freelance Web Designer & Developer.
                 I love making Mobile Apps that add value to people's live. </Text>
             </View>
             <View style={{margin:14}}>
                 <Text style={{fontSize:20, fontFamily:"KulimPark-Light", fontWeight:"bold"}}>Contact Me</Text>
                 <Text style={{ fontSize:15, color:"#666666"}}>You can contact me by using following links.</Text>
             </View>
           <View style={{flexDirection:"row", justifyContent:"space-between", marginLeft:80, marginRight:80}}>
          
                <TouchableOpacity onPress={
                    this.openFacebook
                } style={{ width:"25%", justifyContent:"center"}}>
                <View style={{ width:"100%", padding:10}}>
                <Icon name="facebook" color="#476bb8"size={30} style={{alignSelf:"center",}}/>
                </View>
                </TouchableOpacity>
               
                <TouchableOpacity onPress={
                    this.openTwitter
                } style={{ width:"25%", justifyContent:"center"}}>
                <View style={{ width:"100%", padding:10}}>
                <Icon name="twitter" color="#00acee"size={30} style={{alignSelf:"center",}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={
                    this.handleEmail
                } style={{ width:"25%", justifyContent:"center"}}>
                <View style={{ width:"100%", padding:10}}>
                <MaterialCommunityIcons name="gmail" color="#D44638"size={30} style={{alignSelf:"center",}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={
                    this.openGithub
                } style={{ width:"25%", justifyContent:"center"}}>
                <View style={{ width:"100%", padding:10}}>
                <MaterialCommunityIcons name="github-circle" color="#211F1F"size={30} style={{alignSelf:"center",}}/>
                </View>
                </TouchableOpacity>
           </View>
                {/* <View style={{justifyContent:"center"}}>
                <Image source={require("../assets/images/my.jpg")} style={{width:180, height:180, borderRadius:500}}/>
                <Text style={{fontFamily:"KulimPark-Regular", color:"white", marginTop:20, fontSize:20 , width:"100%", alignSelf:"center"}}>Sanan Ali</Text>
                </View>
                    
                <Text style={{color:"white", fontSize:17, padding:10,fontFamily:"KulimPark-Regular", }}>
                    This Application is Developed by Sanan Ali. He is a Software Engineer,
                 currently working as freelance Web Developer. 
                </Text>
                <TouchableOpacity style={styles.Sharebutton} onPress={
                    this.openFacebook
                }>
                <View style={{ width:"50%"}}>
                <Text style={styles.buttonText}> Like Our Page </Text>
                </View>
                <View style={{ width:"20%"}}>
                <Icon name="facebook-official" color="white"size={30} style={{alignSelf:"center"}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Sharebutton} onPress={
                    this.handleEmail
                }>
                <View style={{ width:"50%"}}>
                <Text style={styles.buttonText}> Send Feedback </Text>
                </View>
                <View style={{ width:"20%"}}>
                <Icon name="send" color="white"size={30} style={{alignSelf:"center"}}/>
                </View>
                </TouchableOpacity> */}
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main :{
        flex :1,
       // alignItems :"center",
       // justifyContent : "center",
        backgroundColor:"white",
      //  padding:10,
    },
    Sharebutton : {
        width:"90%",
        height:"9%",
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
        fontFamily:"KulimPark-Regular", 
    },
});

export default CartScreen;
