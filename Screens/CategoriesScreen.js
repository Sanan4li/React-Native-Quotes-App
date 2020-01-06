import React, { Component } from 'react'
import {StyleSheet, View, Text , Button} from 'react-native';
import MyHeaderButton from "./MyHeaderButton";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
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
        return (
            <View style={styles.main}>
                <Text>
                Categories Screen
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

export default CategoriesScreen;
