import React, { Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import MyHeaderButton from "./MyHeaderButton";
import { Rating, AirbnbRating } from 'react-native-ratings';
import { HeaderButtons , Item } from "react-navigation-header-buttons";
 class RatingScreen extends Component {
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

      ratingCompleted(rating) {
        console.log("Rating is: " + rating)
      }

     
    render() {
         
        return (
            <View style={styles.main}>
               <View style={{padding:20, justifyContent:"space-around", height:"45%"}}>
                   <Text style={{color:"white", fontSize:22}}>
                       Hi,
                      
                   </Text>
                   <Text style={{color:"#d9d9d9", fontSize:18}}>
                   I am a developer working very hard to deliver best applications like this.
                       If this application helps you then please leave an honest review for me.
                      Your review will help me to improve this app and others. 
                   </Text>
                   <Text style={{color:"white", fontSize:22, alignSelf:"center"}}>
                   Thank You.
                   </Text>

               </View>
                <View>
                <AirbnbRating
                count={5}
                reviews={["Terrible", "Bad", "Average", "Good", "Excellent"]}
                defaultRating={4}
                size={20}
                />
                {/* <Rating
                showRating
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 10, backgroundColor:"#1a1a1a" }}
                ratingBackgroundColor="blue"
                imageSize={50}
                showRating={false}
                />
                <Rating
                type='heart'
                ratingCount={3}
                imageSize={60}
                showRating
                onFinishRating={this.ratingCompleted}
                /> */}
                 </View>
          <TouchableOpacity style={styles.Sharebutton} onPress={
               ()=>{
                   Alert.alert("Message Note!", "This Rating is Not Posted! Please Leave Your Message and Rating on Playstore!",["Okay"])
               }
              }>
              <View style={{ width:"50%"}}>
              <Text style={styles.buttonText}> Rate </Text>
              </View>
             
              </TouchableOpacity>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main :{
        backgroundColor:"#1a1a1a",
        flex :1,
        padding:10,
        alignItems :"center",
        justifyContent : "space-around",
    },
    Sharebutton : {
        
        width:"60%",
        height:"10%",
        marginTop:"10%",
        backgroundColor:"#38b750",
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        borderRadius:10,
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

export default RatingScreen;
