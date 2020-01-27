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
            {id : "7", name : "Dale Carnegie", image : "https://www.toolshero.com/wp-content/uploads/dale_carnegie_toolshero.png"},
            {id : "8", name : "Anthony Robbins", image : "https://pbs.twimg.com/profile_images/732642288686391296/II4oQ8i_.jpg"},
            {id : "9", name : "Abraham Lincon", image : "http://www.chicagonow.com/opinionated-woman/files/2018/06/Abraham_Lincoln_O-77_matte_collodion_print-1.jpg"},
            {id : "10", name : "Robert Kiyosaki", image : "https://cdn.thecollegeinvestor.com/wp-content/uploads/2012/10/Robert-Kiyosaki.jpeg"},
            {id : "11", name : "Jim Rohn", image : "https://leadgrowdevelop.com/wp-content/uploads/2015/08/Jim-Rohn.jpg"},
            {id : "12", name : "Earl Nightingale", image : "https://alchetron.com/cdn/earl-nightingale-313d2b20-9c3c-4e67-8c27-ece0a3af9ee-resize-750.jpeg"},
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