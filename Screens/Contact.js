import React, { Component } from 'react'
import {StyleSheet, View, Text, Alert, Linking, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import MyHeaderButton from "./MyHeaderButton";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import SendNotification from "./SendNotification";
import Icon from 'react-native-vector-icons/FontAwesome';
import email from 'react-native-email';
 class Contact extends Component {
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
          title:null,
          message : null
      }
      openFacebook = ()=>{
         Linking.openURL('fb://page/110899427139639');
        // Linking.openURL('fb://profile/100003097706527');
     }
      componentDidMount = () => {
       
        } 
        handleEmail = () => {
            if(this.state.title==null||this.state.message==null){
                Alert.alert(
                    'Error in Sending Message',
                'Title or Message Can\'t be Empty! Please Fill Both Fields.',
                [
                 
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
                );
            }
            else{
                const to = ['hacker.sanan1@gmail.com'] // string or array of email addresses
                email(to, {
                    // Optional additional arguments
                    // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
                    // bcc: 'mee@mee.com', // string or array of email addresses
                    subject: this.state.title,
                    body: this.state.message
                }).catch(console.error)
            }
          
        }
      
        onTitleChangeHandler = (text)=>{
           this.setState({
               title:text
           });
        }
        onMessageChangeHandler = (text)=>{
           this.setState({
               message:text
           });
        }
    render() {
        
     
        console.log(this.state.connected)
         
        return (
            <View style={styles.main}>
                <SendNotification/>
              
<KeyboardAvoidingView behavior="height" enabled style={{alignItems:"center", height:"100%"}}>
         
<TextInput placeholder="Title" name="title" placeholderTextColor="white" onChangeText={(value) => this.onTitleChangeHandler(value)
}
      style={{ height: "10%", width:"90%", borderColor: 'gray', borderWidth: 1, color:"white", marginBottom:10, marginTop:10,padding:10 }} />
                <TextInput placeholder="Message" placeholderTextColor="white" multiline={true} onChangeText={(value) => this.onMessageChangeHandler(value)}
      style={{ height: "20%", width:"90%", borderColor: 'gray', borderWidth: 1, color:"white",marginBottom:10, padding:10 }} />
        
         
                        
            <TouchableOpacity style={styles.Sharebutton} onPress={this.handleEmail}>
            <View style={{ width:"50%"}}>
            <Text style={styles.buttonText}>  Send Message</Text>
            </View>
            <View style={{ width:"20%"}}>
            <Icon name="send" color="white"size={25} style={{alignSelf:"center"}}/>
            </View>
            </TouchableOpacity>
           <View style={{height:20}}>

           </View>
            <TouchableOpacity style={styles.Sharebutton} onPress={this.openFacebook}>
            <View style={{ width:"50%"}}>
            <Text style={styles.buttonText}> Like Our Page</Text>
            </View>
            <View style={{ width:"20%"}}>
            <Icon name="facebook-square" color="white"size={25} style={{alignSelf:"center"}}/>
            </View>
            </TouchableOpacity>
           
</KeyboardAvoidingView>
    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main :{
        backgroundColor:"#1a1a1a",
        flex :1,
      //  alignItems :"center",
      //  justifyContent : "center",
    },
    Sharebutton : {
        width:"90%",
        height:"10%",
        backgroundColor:"#38b750",
        justifyContent:"space-around",
        alignItems:"center",
       
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

export default Contact;
