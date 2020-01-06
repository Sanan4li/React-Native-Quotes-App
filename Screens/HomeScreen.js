import React, { Component } from 'react'
import {StyleSheet, View, Button, Text} from 'react-native';
import MyHeaderButton from "./MyHeaderButton";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import Entypo from "react-native-vector-icons";
 class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
         title : navigation.getParam("title"),
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
        return (
            <View style={styles.main}>
                <Text>
                    Home Screen Test
                </Text>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main :{
        flex :1,
        alignItems :"center",
        justifyContent : "center",
    }
});

export default HomeScreen;
