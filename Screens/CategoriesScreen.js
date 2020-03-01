import React, { Component } from 'react'
import {StyleSheet, View, Text , Button} from 'react-native';
import MyHeaderButton from "./MyHeaderButton";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import Categories from "./Categories";
import SendNotification from "./SendNotification";
import Ad from "./Ad";
 class CategoriesScreen extends Component {
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
    render() {
       // this.props.navigation.setParam({color:"white"});
        return (
            <View style={styles.main}>
                <SendNotification/>
               <View style={{height:"90%"}}>
               <Categories props={this.props} color="white"/>
             
               </View>
               <View style={{alignItems:"center", padding:5}}>
            <Ad size="Banner"/>

           </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main :{
        flex :1,
       // alignItems :"center",
        //justifyContent : "center",
        backgroundColor:"#1a1a1a"
    }
});

export default CategoriesScreen;
