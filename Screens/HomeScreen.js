import React, { Component } from 'react'
import {StyleSheet, View, Image, ImageBackground, Dimensions, FlatList,  Text, TouchableOpacity} from 'react-native';
import MyHeaderButton from "./MyHeaderButton";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import Entypo from "react-native-vector-icons";
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import Categories from "./Categories";
import QuoteDetailScreen from "./QuoteDetailScreen";
import Dots from 'react-native-dots-pagination';import {PERMISSIONS, request} from 'react-native-permissions';
state = {
 
}

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
        </HeaderButtons>,
         headerRight : 
         <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item title="Favourtie" iconName="search" 
          onPress={()=>{
           console.log("Search Button Pressed")
          }}
          
           />
        </HeaderButtons>,
             
               
            
        };
      };


      state = {
          currentPage : 0,
        entries : [
            {title : "First", body: "imagination is everything. It is the preview of life's coming attractions.",
            image : "../assets/images/companyIcon.jpg" },
            {title : "Second", body: "Life is like riding a bicycle. To keep your balance you must keep moving",image : "../assets/images/companyIcon.jpg" },
            {title : "First", body: "The important thing is not to stop questioning. Curiosity has its own reason for existing",image : "../assets/images/companyIcon.jpg" },
            {title : "Second", body: "No problem can be solved from the same level of consciousness that created it",image : "../assets/images/companyIcon.jpg" },
            {title : "First", body: "Try not to become a man of success, but rather try to become a man of value.",image : "../assets/images/companyIcon.jpg" },
            ],
            storagePermission:null,
      }


      _renderItem =  ({item, index}, parallaxProps)=> {
        return (
           
                <TouchableOpacity onPress={
                    ()=>{
                       this.props.navigation.navigate("Detail");
                    }
                } style={styles.item}>
                <View>
                 <Image source={require("../assets/images/quotesIcon.png")} style={{width:30, height:30}} />
                <Text style={{color:"white",fontFamily:"KulimPark-Light", fontSize:17}} numberOfLines={8}>
                    { item.body } 
                </Text>
                </View>
                <View style={{alignItems:"flex-end"}}>
                    <Text style={{color:"#66ff66"}}>
                        ~Albert Einstien
                    </Text>
                </View>
            </TouchableOpacity>
           
        );
    }


    componentDidMount  = ()=> {
        // getting permission of storage
        request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(result => {
         this.setState({
           storagePermission : result
         }), ()=>{
           console.log(this.state.storagePermission);
         };
       });
       request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(result => {
        this.setState({
          storagePermission : result
        }), ()=>{
          console.log(this.state.storagePermission);
        };
      });
       }

    render() {

        let devicesWidth = Dimensions.get("window").width;
        let devicesHeight = Dimensions.get("window").height;
        return (
            <View style={styles.main}>
              <View style={{height:"35%", width:"100%", backgroundColor:"#1a1a1a"}}>
                <View style={{}}>
                <Text style={{color:"white", fontFamily:"KulimPark-Regular", fontWeight:"bold", fontSize:16, marginLeft:22,padding:2}}>Popular Quotes</Text>
                </View> 
            <Carousel onSnapToItem={
               (index) => this.setState({currentPage:index})
            }
                sliderWidth={devicesWidth}
                sliderHeight={devicesHeight}
                itemWidth={devicesWidth - 30}
                data={this.state.entries}
                renderItem={this._renderItem}
                hasParallaxImages={true}
            />
           <View>
           <Dots length={5} active={this.state.currentPage} passiveColor="white" activeColor="#66ff66" activeDotWidth={10} passiveDotWidth={8} paddingVertical={15} />
           </View>
              </View>
             <View style={{padding:5, height:30,  alignItems:"center"}}>
                 <Text style={{fontFamily:"KulimPark-Regular",fontWeight:"bold", fontSize:18,}}>
                     More Quotes
                 </Text>
             </View>
 
                <Categories props={this.props}/>


            </View>
               
        )
    }
}

const styles = StyleSheet.create({
    main :{
        flex :1,
       
    },
    item: {
       width:"100%",
       height:"90%",
      
      },
      imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
      },
      image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
      },
});

export default HomeScreen;
