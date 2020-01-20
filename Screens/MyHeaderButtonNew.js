import React, { Component } from 'react'
import {View, Text , StyleSheet} from "react-native";
import {HeaderButton} from "react-navigation-header-buttons";
import Fontisto from 'react-native-vector-icons/Fontisto';
class MyHeaderButtonNew extends Component {
    render() {
        return (
            <HeaderButton {...this.props} IconComponent={Fontisto} iconSize={22} 
            color="white" />
        )
    }
}
export default MyHeaderButtonNew;









