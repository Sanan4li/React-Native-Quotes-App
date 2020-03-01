import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import MyHeaderButton from "./MyHeaderButton";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/FontAwesome';
import Toast, {DURATION} from 'react-native-easy-toast';
import { openDatabase } from 'react-native-sqlite-storage';
class SettingsScreen extends Component{
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
          notifications : null,
          firstBackgroundColor : "#38b750",
          secondBackgroundColor: "#1a1a1a",
          thirdBackgroundColor: "#1a1a1a",
          firstBorderWidth: 0,
          secondBorderWidth : 0.5,
          thirdBorderWidth : 0.5,
          firstIconName : "check-circle",
          secondIconName: "circle-thin",
          thirdIconName : "circle-thin",
      }
      setNotifcations = (value)=>{
        this.setState({
            notifications : value
        });
      }
      saveSettings = ()=>{
          console.log(this.state.notifications);
          this.update(this.state.notifications);
          this.refs.toast.show('Settings Seved!');
      } 
      getSettings = ()=>{
        var db = openDatabase({ name: 'test.db' });
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM setting', [], (tx, results) => {
              var temp = [];
              for (let i = 0; i < results.rows.length; ++i) {
                temp.push(results.rows.item(i));
              }
              this.setState({
                notifications: temp[0].notifications,
              },()=>{
                if(this.state.notifications=="English"){
                    this.changeBackground("first");
                }
                else if(this.state.notifications=="Urdu"){
                  this.changeBackground("second");
              }
              else if(this.state.notifications=="Both"){
                  this.changeBackground("third");
              }
              });
            });
          });

      }
      componentDidMount = ()=>{
        
         this.getSettings();
          
      }

      update = (not)=>{
        console.log("test");
      var db = openDatabase({ name: 'test.db' });
      this.refs.toast.show('Added to Favourites!');
            db.transaction(function(tx) {
              tx.executeSql(
                'UPDATE setting set notifications = ?',
                [not],
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

      changeBackground = (btn)=>{
          if(btn=="first"){
            this.setState({
                notifications : "English",
                firstBackgroundColor : "#38b750",
                secondBackgroundColor: "#1a1a1a",
                thirdBackgroundColor: "#1a1a1a",
                firstBorderWidth: 0,
                secondBorderWidth : 0.5,
                thirdBorderWidth : 0.5,
                firstIconName : "check-circle",
                secondIconName: "circle-thin",
                thirdIconName : "circle-thin",
            });
          }
          else if(btn=="second"){
            this.setState({
                notifications : "Urdu",
                firstBackgroundColor : "#1a1a1a",
                secondBackgroundColor: "#38b750",
                thirdBackgroundColor: "#1a1a1a",
                firstBorderWidth: 0.5,
                secondBorderWidth : 0,
                thirdBorderWidth : 0.5,
                firstIconName : "circle-thin",
                secondIconName: "check-circle",
                thirdIconName : "circle-thin",

            });
          }
          else if(btn=="third"){
            this.setState({
                notifications : "Both",
                firstBackgroundColor : "#1a1a1a",
                secondBackgroundColor: "#1a1a1a",
                thirdBackgroundColor: "#38b750",
                firstBorderWidth: 0.5,
                secondBorderWidth : 0.5,
                thirdBorderWidth : 0,
                firstIconName : "circle-thin",
                secondIconName: "circle-thin",
                thirdIconName : "check-circle",
            });
          }
          
      }
    render(){
      console.log(this.state.notifications);
        return(
            <View style={styles.main}>
               <View style={{padding:10, margin:10}}>
               <Text style={{color:"white", fontFamily:"KulimPark-Regular", fontSize:18, alignSelf:"center"}}>
               Select Daily Notifications 
                </Text>
               </View>
        <TouchableOpacity style={{backgroundColor: this.state.firstBackgroundColor, marginTop:30, borderColor:"white", borderWidth:this.state.firstBorderWidth, width:"60%", padding:15, borderRadius:10, flexDirection:"row", justifyContent:"space-between"}} 
        onPress = {
            ()=>{
                let btn = "first";
                this.changeBackground(btn);
            }
        }
        >
          
            <View>
                <Text style={{color:"white"}}>English</Text>
            </View>
            <View>
            <Feather color="white" size={20} name={this.state.firstIconName}/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor:this.state.secondBackgroundColor, marginTop:30, borderColor:"white", borderWidth:this.state.secondBorderWidth, width:"60%", padding:15, borderRadius:10, flexDirection:"row", justifyContent:"space-between"}}
        onPress = {
            ()=>{
                let btn = "second";
                this.changeBackground(btn);
            }
        }
        >
          
          <View>
              <Text style={{color:"white"}}>Urdu</Text>
          </View>
          <View>
          <Feather color="white" size={20} name={this.state.secondIconName}/>
          </View>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:this.state.thirdBackgroundColor, marginTop:30, borderColor:"white", borderWidth:this.state.thirdBorderWidth, width:"60%", padding:15, borderRadius:10, flexDirection:"row", justifyContent:"space-between"}}
      onPress = {
        ()=>{
            let btn = "third";
            this.changeBackground(btn);
        }
    }
      >
          
          <View>
              <Text style={{color:"white"}}>Both</Text>
          </View>
          <View>
          <Feather color="white" size={20} name={this.state.thirdIconName}/>
          </View>
      </TouchableOpacity>
           
            <View style={{marginTop:"40%"}}>

            </View>
            <TouchableOpacity style={styles.Sharebutton} onPress={
                    
                      this.saveSettings
                    
                }>
                <View style={{ width:"50%"}}>
                <Text style={styles.buttonText}> Save </Text>
                </View>
               
                </TouchableOpacity>
                <Toast ref="toast"  style={{backgroundColor:'#38b750'}}
                    position="center"
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
    main : {
        flex:1,
       // justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#1a1a1a",
    },
    Sharebutton : {
        
        width:"60%",
        height:"8%",
        backgroundColor:"#38b750",
        justifyContent:"space-around",
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
export default SettingsScreen;