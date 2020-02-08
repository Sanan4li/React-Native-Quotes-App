import React from "react";
import {
    SafeAreaView, View, Text,StyleSheet,ScrollView, ImageBackground
} from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator ,DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Categories from "../Screens/Categories";
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FavScreen from "../Screens/FavScreen";
import HomeScreen from "../Screens/HomeScreen";
import CategoriesScreen from "../Screens/CategoriesScreen";
import CartScreen from "../Screens/CartScreen";
import QuoteDetailScreen from "../Screens/QuoteDetailScreen";
import QuotesListScreen from "../Screens/QuotesListScreen";
import ShareScreen from "../Screens/ShareScreen";
import Contact from "../Screens/Contact";
const defaultOptionsForStack =  {
    defaultNavigationOptions: {
       
    headerStyle: {
        backgroundColor: '#1a1a1a',
        elevation: 0,
        shadowOpacity: 0,
        height:50
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
        fontWeight: 'bold',
        color: '#FFFFFF',
         fontSize:18
    }
}   
      
  };

   const CategoriesStack = createStackNavigator({
      Categories : {
          screen : CategoriesScreen,
          navigationOptions : {
            headerTitle : " Categories"
        }
      },
    //   CategoriesProducts : {
    //       screen : CategoriesProductsScreen,
    QuestList : {
        screen : QuotesListScreen
    }
   

  }, defaultOptionsForStack
  
  );     

  const HomeStack = createStackNavigator({
   
    Home : {
        screen : HomeScreen,
        navigationOptions : {
          headerTitle : ""
      }
    },
    Detail : {
        screen : QuoteDetailScreen,
        navigationOptions : {
          headerTitle : ""
      }
    },
    QuotesList : {
        screen : QuotesListScreen
    },
    Cat : {
        screen : Categories,
    },
    Share : {
        screen :ShareScreen,
        navigationOptions : {
            headerTitle : "Share Options"
        }
    }
    // Cart : {
    //     screen : CartScreen
    // }

}, defaultOptionsForStack

);     


const FavStack = createStackNavigator({
   
    FavScreen : {
        screen : FavScreen,
        navigationOptions : {
          headerTitle : "Favourites"
      }
    },
    Detail : {
        screen : QuoteDetailScreen,
        navigationOptions : {
          headerTitle : ""
      }
    },
    Share : {
        screen :ShareScreen,
        navigationOptions : {
            headerTitle : "Share Options"
        }
    }

//     Cart : {
//         screen : CartScreen
//     }

}, defaultOptionsForStack

);     


const CartStack = createStackNavigator({
   
    Cart : {
        screen : CartScreen,
        navigationOptions:{
            headerTitle : "About Developer"
        }
    },
}, defaultOptionsForStack

);     

const ContactStack = createStackNavigator({
   
    Cart : {
        screen : Contact,
        navigationOptions:{
            headerTitle : "Contact"
        }
    },
}, defaultOptionsForStack

);     





  const NavigationDrawer = createDrawerNavigator({
    Home: {
        screen : HomeStack,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return   <Icon name="home" size={20} color={tintColor} />
                   },

        }
        },
    Categories : {
        screen : CategoriesStack,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return   <Icon name="th-list" size={20} color={tintColor} />
                   }
        }
        },

    Favourites : {
        screen : FavStack,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return    <Fontisto name="heart" size={20} color={tintColor} />
                   }
        }
        },
        "About" : {
            screen : CartStack,
                navigationOptions : {
                    drawerIcon: ({ tintColor }) => {
                        return   <Icon name="info-circle" size={20} color={tintColor} />
                       }
            }
            },
        
    "Contact" : {
        screen : ContactStack,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return   <Entypo name="mail" size={20} color={tintColor} />
                   }
        }
        },
    
    },
    {
        contentOptions: {
            activeTintColor: "#33ff33",
            activeBackgroundColor : "#000000",
            inactiveTintColor:"white"
        },
        contentComponent: (props) => (
           
         <SafeAreaView style={{backgroundColor:"#1a1a1a", color:"white", flex:1}}>
             <View style={{height: 100,alignItems: 'center', justifyContent: 'center'}}>
             <ImageBackground resizeMode="cover" source={require("../assets/images/qu.jpg")} style={{width: '100%', height: '100%'}}>
                <Text style={{fontSize:20, color:"white", textAlign : "left", marginTop:20, marginLeft:50, fontFamily:"BebasNeue-Regular"}}>Success</Text>
            </ImageBackground>
             </View>
           <ScrollView>
             <DrawerItems {...props} />
           </ScrollView>
         </SafeAreaView>
        )
     });

const AppContainer = createAppContainer(NavigationDrawer);

export default AppContainer ;











