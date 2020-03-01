import React, { Component } from 'react'
import {StyleSheet, View, Image, Alert, Dimensions, FlatList,  Text, TouchableOpacity, Button} from 'react-native';
import MyHeaderButton from "./MyHeaderButton";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import Categories from "./Categories";
import Dots from 'react-native-dots-pagination';import {PERMISSIONS, request} from 'react-native-permissions';
import PushNotification from 'react-native-push-notification';
import SendNotification from "./SendNotification";
import {initAgain} from "./Database";
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
        //  headerRight : 
        //  <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        //   <Item title="Favourtie" iconName="search" 
        //   onPress={()=>{
        //    console.log("Search Button Pressed")
        //   }}
          
        //    />
        // </HeaderButtons>,
             
               
            
        };
      };


      state = {
          currentPage : 0,
        entries : [
            {id:"2", category:"Albert Einstein", body : "No problem can be solved from the same level of consciousness that created it.", by : "Albert Einstein" },
            {id:"376", category:"Preparation", body : "In all things, success depends upon previous preparation, and without such preparation, there is failure.", by : "Confucius" },
            {id:"346", category:"Think Big", body : "If you have the will to win, you have achieved half your success; if you don’t, you have achieved half your failure.", by : "David V.A. Ambrose" },
            {id:"57", category:"Anthony Robbins", body : "It's not the events of our lives that shape us, but our beliefs as to what those events mean.", by : "Anthony Robbins" },
            {id:"80", category:"Dale Carnegie", body : "Remember happiness doesn't depend on who you are or what you have; it depends solely upon what you think.", by : "Dale Carnegie" },
            ],
            storagePermission:null,
           
      }


      _renderItem =  ({item, index}, parallaxProps)=> {
        return (
           
                <TouchableOpacity onPress={
                    ()=>{
                      let sharedNumber = Math.floor(Math.random() * (999 - 1 + 1) + 1);
                      let likesNumber = Math.floor(Math.random() * (500 - 1 + 1) + 1);
                       this.props.navigation.navigate("Detail", {id:item.id, category:item.category,body:item.body, by:item.by,likes:likesNumber, shares:sharedNumber});
                    }
                } style={styles.item}>
                <View>
                 <Image source={require("../assets/images/quotesIcon.png")} style={{width:30, height:30}} />
                <Text style={{color:"white",fontFamily:"KulimPark-Light", fontSize:19}} numberOfLines={8}>
                    { item.body } 
                </Text>
                </View>
                <View style={{alignItems:"flex-end"}}>
                    <Text style={{fontFamily:"KulimPark-Regular", fontSize:16, color:"#66ff66"}}>
                       ~ {item.by}
                    </Text>
                </View>
            </TouchableOpacity>
           
        );
    }

    componentDidMount = ()=>{
        initAgain();
        PushNotification.configure({
            // (required) Called when a remote or local notification is opened or received
            onNotification: notification => {
              if (notification.action === "View") {
              
                console.log("View Clicked");
               
                PushNotification.cancelAllLocalNotifications();
                if(notification.quoteInfo.id>1797){
                  this.props.navigation.navigate("QuoteDetailScreenUrdu", {id:notification.quoteInfo.body ,body:notification.quoteInfo.body, by:notification.quoteInfo.by});
             
                }
                else{
                  this.props.navigation.navigate("Detail", {id:notification.quoteInfo.body, body:notification.quoteInfo.body, by:notification.quoteInfo.by});
             
                }
              } 
            },
            popInitialNotification: true,
            requestPermissions: true
          });

    }
    
   
    render() {
        

        let devicesWidth = Dimensions.get("window").width;
        let devicesHeight = Dimensions.get("window").height;
        return (
            <View style={styles.main}>
              <SendNotification/>
              <View style={{height:"35%", width:"100%", backgroundColor:"#1a1a1a"}}>
                <View style={{}}>
                <Text style={styles.popularText}>Popular Quotes</Text>
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
                {/* <Button title="INSERT" onPress={this.insert} />
                <Button title="DELETE" onPress={this.deleteUser} />
                <FlatList
          data={this.state.FlatListItems}
         
         
          renderItem={({ item }) => (
            <View key={item.user_id} style={{ backgroundColor: 'white', padding: 20 }}>
              <Text>Id: {item.user_id}</Text>
              <Text>Name: {item.user_name}</Text>
              <Text>Contact: {item.user_contact}</Text>
              <Text>Address: {item.user_address}</Text>
            </View>
          )}
        /> */}
                <Categories props={this.props} color="#1a1a1a"/>


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
      popularText :{
          color:"white", 
          fontFamily:"KulimPark-Regular", 
         
          fontSize:18, 
          marginLeft:22,
          padding:2
        }
});

export default HomeScreen;
