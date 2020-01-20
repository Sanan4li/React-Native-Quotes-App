import React, {Component} from "react";
import {StyleSheet, View, Image, TouchableOpacity, FlatList, Clipboard , Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from "react-native-vector-icons/Fontisto";
import Toast, {DURATION} from 'react-native-easy-toast';
class QuotesListScreen extends Component{

    static navigationOptions = ({ navigation }) => {
        return {
         title : navigation.getParam("title"),
        
               
            
        };
      };
      
      state = {
      entries : [
          {id: "1", liked:"false", title : "First", body: "imagination is everything. It is the preview of life's coming attractions.",
          image : "../assets/images/companyIcon.jpg" },
          {id: "2",liked:"false",title : "Second", body: "Life is like riding a bicycle. To keep your balance you must keep moving",image : "../assets/images/companyIcon.jpg" },
          {id: "3",liked:"false",title : "First", body: "The important thing is not to stop questioning. Curiosity has its own reason for existing",image : "../assets/images/companyIcon.jpg" },
          {id: "4",liked:"false",title : "Second", body: "No problem can be solved from the same level of consciousness that created it",image : "../assets/images/companyIcon.jpg" },
          {id: "5",liked:"false",title : "First", body: "Try not to become a man of success, but rather try to become a man of value.",image : "../assets/images/companyIcon.jpg" },
          ],
          likeColor:"white"
    }
   
    copyText = ()=>{
        () => Clipboard.setString(data.item.body);
        this.refs.toast.show('Copied to Clipboard!');
    }
  
    render(){
       
        return(
            <View style={styles.main}>
              
          <FlatList 
           
           data={this.state.entries}
           renderItem={(data)=>{
              
            return(
                <TouchableOpacity
                onPress={
                    ()=>{
                        this.props.navigation.navigate("Detail");
                    }
                }
                
                style={{  backgroundColor:"#262626",  marginTop:5, borderRadius:5, padding:20, }}> 
               
                 <View>
                 
                 <Image source={require("../assets/images/quotesIcon.png")} style={{width:30, height:30}} />
               
                 <Text style={{fontFamily:"KulimPark-Light", fontWeight:"bold", fontSize:18, color:"white"}}>
                     { data.item.body }
                  </Text>
                  </View>
                  <View style={{alignItems:"flex-end", marginTop:5}}>
                  <Text style={{color:"#38b750"}}>
                      ~ Albert Einstien
                  </Text>
                 </View>
                 <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:30, width:"100%", padding:5}}>
                     
                <TouchableOpacity style={{ width:"25%", padding:5,}}
                     onPress={
                        ()=>{ if(this.state.likeColor=="white"){
                         this.setState({
                             likeColor:"#ff1a75",
                            
                         });
                        }
                        else{
                         this.setState({
                             likeColor:"white",
                         });
                        }
                            
                        }
                    }
                >
                <Fontisto color={this.state.likeColor} size={20} name="heart" style={{alignSelf:"center"}} />
                </TouchableOpacity>
               <TouchableOpacity  style={{width:"25%",padding:5}} onPress={this.copyText }>
               <Icon name="copy" color="white"size={20} style={{alignSelf:"center"}}/>
               </TouchableOpacity>
               <TouchableOpacity  style={{ width:"25%",padding:5}}>
               <Icon name="download" color="white"size={20} style={{alignSelf:"center"}}/>
               </TouchableOpacity>
               <TouchableOpacity  style={{ width:"25%",padding:5}}>
               <Icon name="share" color="white"size={20} style={{alignSelf:"center"}}/>       
            </TouchableOpacity> 
                </View>
                
                </TouchableOpacity>
              )
           }}
           />
             <Toast ref="toast"  style={{backgroundColor:'#38b750'}}
                    
                    positionValue={150}
                    fadeInDuration={550}
                    fadeOutDuration={500}
                    opacity={1}
                    textStyle={{color:'white'}} />
        </View>
          
       
        )
    }


}
const styles = StyleSheet.create({
    main : {
        backgroundColor:"#1a1a1a",
        flex:1,
    }
})
export default QuotesListScreen;