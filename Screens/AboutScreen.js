import React, { Component } from 'react'
import {StyleSheet, View, Text} from 'react-native';

 class AboutScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
         title : navigation.getParam("title"),
         
        //   headerRight : <View style={{flexDirection:"row"}}>
           
        //    <View>
        //       <Badge value={navigation.getParam("count")} status="primary" 
        //       containerStyle={{ position: 'absolute',  right: 4 , zIndex:999}}
        //        />
        //       <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        //        <Item title="Favourtie" iconName="shopping-cart" 
        //        onPress={()=>{
        //            console.log("Pressed");
        //        }}
        //         style={{marginTop:4}}
        //         />
        //      </HeaderButtons>
               
        //       </View>
        //   </View>
        };
      };
    render() {
        return (
            <View style={styles.main}>
                <Text>
                   About Screen
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

export default AboutScreen;
