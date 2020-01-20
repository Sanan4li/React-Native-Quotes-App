import React, {Component} from "react";
import {StyleSheet, View, Image, ImageBackground, Dimensions,  Text} from 'react-native';
import PaginationDot from 'react-native-animated-pagination-dot';
class MySlideComponent extends Component{


    render(){
        console.log(this.props);
        return(
            <View>
                       <ImageBackground resizeMode="cover"  source={require("../assets/images/companyIcon.jpg")} style={{ width:"100%", height:"100%"}}>
                           <View style={{backgroundColor:"aqua", alignItems:"center", width:"90%", justifyContent:"center", padding:10, marginTop:"10%"}}>
                           <Text style={{color:"white"}}>{ this.props.data.title }</Text>    
                           <Text  style={{color:"white"}}>{ this.props.data.body }</Text> 
                         </View>  
                        
                
                  </ImageBackground>
                 
                  
          </View>
        )
    }


}
export default MySlideComponent;