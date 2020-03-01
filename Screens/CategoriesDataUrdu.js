import React, {Component} from "react";
import {StyleSheet, View, Image, ImageBackground, FlatList, TouchableOpacity, Text} from 'react-native';
class Categories extends Component{

    state = {
     
        categories : [
            {id : "2", name : "واصف علی واصف", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4YDiXGyVaQWNPfFYpCG-6RTgirTLqKRQxPYk4_P2Q3AbIC54X"},
            {id : "4", name : "قائداعظم محمد علی جناح", image : "https://dnd.com.pk/wp-content/uploads/2019/12/Quaid-i-Azam-Muhammad-Ali-Jinnah.jpg"},
            {id : "1", name : "قاسم علی شاہ", image : "https://www.journeyofthehearts.com/wp-content/uploads/2019/09/Qasim-Ali-Shah-1.jpg"},
            {id : "5", name : "اشفاق احمد", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwsVd7zb0xTr4L5Xdy-6CvS_7kosm595SSww2c2LEmtHyfnyA0"},
            {id : "6", name : "بانو قدسیہ", image : "https://www.celebrityborn.com/admin/assets/images/people/l6w92ddeG3z6LSaGmGGp_2016_08_21.JPG"},
            {id : "7", name : "شیخ سعدی", image : "https://www.indianetzone.com/photos_gallery/19/SheikhSaadi_18277.jpg"},
            {id : "8", name : "جلال الدین رومی", image : "https://steemitimages.com/640x0/http://rumibalkhi.com/wp-content/uploads/cropped-Maulana-Jalaluddin-Balkhi-Rumi-1.png"},
            {id : "3", name : "بل گیٹس", image : "https://images.wsj.net/im-105325?width=620&size=1.5"},
            
        ]
    }

   
    render(){
 
        return(
           <FlatList numColumns={2}
           columnWrapperStyle={{justifyContent:"space-evenly"}}
           data={this.state.categories}
           renderItem={(data)=>{
               //console.log(data)
            
            return(
                <TouchableOpacity onPress={
                    
                       ()=>{
                           this.props.props.navigation.navigate("QuestListUrdu", {title:data.item.name})
                       }
                    
                } style={{ justifyContent:"center", alignItems:"center",  borderRadius:10, padding:5}}>
                    <View>
                    <Image source={{uri:data.item.image}} style={{width:120, height:120, borderRadius:10}} />
                 
                    </View>
                 <View>
                 <Text style={{fontFamily:"urdu", fontSize:18, color:this.props.color}}>
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