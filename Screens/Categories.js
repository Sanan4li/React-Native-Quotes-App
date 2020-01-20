import React, {Component} from "react";
import {StyleSheet, View, Image, ImageBackground, FlatList, TouchableOpacity, Text} from 'react-native';
class Categories extends Component{

    state = {
        categories : [
            {id : "1", name : "Albert Einsein", image : "https://cdn.mos.cms.futurecdn.net/c7dppKDbG3JXuMfybV5tUX-320-80.jpg"},
            {id : "2", name : "Donald Trump", image : "https://cdn.cnn.com/cnnnext/dam/assets/171204114521-02-donald-trump-12-04-2017-full-169.jpg"},
            {id : "3", name : "Bill Gates", image : "https://images.wsj.net/im-105325?width=620&size=1.5"},
            {id : "4", name : "Napoleon Hill", image : "https://www.toolshero.com/wp-content/uploads/2016/10/napoleon_hill_toolshero-e1505141183188.jpg"},
            {id : "5", name : "Elun Musk", image : "https://api.time.com/wp-content/uploads/2015/05/elon-musk.jpg?w=600&quality=85"},
            {id : "6", name : "Brian Tracy", image : "https://pbs.twimg.com/profile_images/967636564972134400/OiVIYrwE_400x400.jpg"},
        ]
    }
    // renderItemFunction = (data)=>{
    //     return(
    //       <View>
    //         <Image source={require("../assets/images/einstein.jpg")} style={{width:150, height:150}} />
    //         <Text>
    //             {data.item.name}
    //         </Text>
    //       </View>
    //     )
    // }
    render(){
       
        return(
           <FlatList numColumns={2}
           columnWrapperStyle={{justifyContent:"space-evenly"}}
           data={this.state.categories}
           renderItem={(data)=>{
               console.log(data)
            return(
                <TouchableOpacity onPress={
                    
                       ()=>{
                           this.props.props.navigation.navigate("QuotesList", {title:data.item.name})
                       }
                    
                } style={{ justifyContent:"center", alignItems:"center", marginTop:5, borderRadius:10, padding:10}}>
                    <View>
                    <Image source={{uri:data.item.image}} style={{width:120, height:120, borderRadius:10}} />
                 
                    </View>
                 <View>
                 <Text style={{fontFamily:"Jaldi-Regular", fontWeight:"bold", color:"#1a1a1a"}}>
                     { data.item.name }
                  </Text>
                 </View>
                </TouchableOpacity>
              )
           }}
           />
        )
    }


}
export default Categories;