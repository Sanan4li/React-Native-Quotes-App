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
        console.log(this.props.navigation.state.routeName);
        return (
            <View style={styles.main}>
                <Button title="Open Menus"
                onPress={
                    ()=>{
                        this.props.navigation.openDrawer();
                    }
                }
                />
                <Text style={{fontFamily : "Anton-Regular"}}>
                    Testing Custom Fonts : Anton-Regular
                </Text>
                <Text style={{fontFamily : "BebasNeue-Regular"}}>
                    Testing Custom Fonts : BebasNeue-Regular
                </Text>
                <Text style={{fontFamily : "FiraSansCondensed-Black"}}>
                    Testing Custom Fonts : FiraSansCondensed-Black
                </Text>
                <Text style={{fontFamily : "FjallaOne-Regular"}}>
                    Testing Custom Fonts : FjallaOne-Regular
                </Text>
                <Text style={{fontFamily : "FrancoisOne-Regular"}}>
                    Testing Custom Fonts : FrancoisOne-Regular
                </Text>
                <Text style={{fontFamily : "IbarraRealNova-Regular"}}>
                    Testing Custom Fonts : IbarraRealNova-Regular
                </Text>
                <Text style={{fontFamily : "Jaldi-Regular"}}>
                    Testing Custom Fonts : Jaldi-Regular
                </Text>
                <Text style={{fontFamily : "KulimPark-Light"}}>
                    Testing Custom Fonts : KulimPark-Light
                </Text>
                <Text style={{fontFamily : "KulimPark-LightItalic"}}>
                    Testing Custom Fonts : KulimPark-LightItalic
                </Text>
                <Text style={{fontFamily : "KulimPark-Regular"}}>
                    Testing Custom Fonts : KulimPark-Regular
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
