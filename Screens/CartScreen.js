import React, { Component } from 'react'
import {StyleSheet, View, Text, Linking, TouchableOpacity, Image} from 'react-native';
import MyHeaderButton from "./MyHeaderButton";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import SendNotification from "./SendNotification";
import NetInfo from "@react-native-community/netinfo";
import email from 'react-native-email';
import Icon from 'react-native-vector-icons/FontAwesome';
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

        openFacebook = ()=>{
            Linking.openURL('fb://page/110899427139639');
        }
        handleEmail = () => {
           
            
                const to = ['hacker.sanan1@gmail.com'] // string or array of email addresses
                email(to, {
                    
                    subject: "feedback from Quote App",
                    body: "Type Your Message: "
                }).catch(console.error)
            
          
        }
     
    render() {
        
     
      
         
        return (
            <View style={styles.main}>
                <SendNotification/>
                <View style={{justifyContent:"center"}}>
                <Image source={require("../assets/images/my.jpg")} style={{width:180, height:180, borderRadius:500}}/>
                <Text style={{color:"white", marginTop:20, fontSize:20 , width:"100%", alignSelf:"center"}}>Sanan Ali</Text>
                </View>
                    
                <Text style={{color:"white", fontSize:17, padding:10}}>
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
                </TouchableOpacity>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main :{
        flex :1,
        alignItems :"center",
       // justifyContent : "center",
        backgroundColor:"#1a1a1a",
        padding:10,
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
        alignSelf:"center"
    },
});

export default CartScreen;
