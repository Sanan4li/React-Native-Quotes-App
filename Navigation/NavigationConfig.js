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
import CategoriesUrdu from "../Screens/CategoriesUrdu";
import CartScreen from "../Screens/CartScreen";
import QuoteDetailScreen from "../Screens/QuoteDetailScreen";
import QuoteDetailScreenUrdu from "../Screens/QuoteDetailScreenUrdu";
import QuotesListScreen from "../Screens/QuotesListScreen";
import QuotesListScreenUrdu from "../Screens/QuotesListScreenUrdu";
import ShareScreen from "../Screens/ShareScreen";
import ShareScreenUrdu from "../Screens/ShareScreenUrdu";
import Contact from "../Screens/Contact";
import SettingsScreen from "../Screens/SettingsScreen";
import RatingScreen from "../Screens/RatingScreen";
const defaultOptionsForStack =  {
    defaultNavigationOptions: {
       
    headerStyle: {
        backgroundColor: '#1a1a1a',
        elevation: 0,
        shadowOpacity: 0,
        height:50,
        fontFamily:"KulimPark-Regular", 
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
        fontWeight: 'bold',
        color: '#FFFFFF',
         fontSize:18,
       
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
  const UrduStock = createStackNavigator({
    CategoriesUrdu : {
        screen : CategoriesUrdu,
        navigationOptions : {
          headerTitle : "Urdu"
      }
    },
  //   CategoriesProducts : {
  //       screen : CategoriesProductsScreen,
  QuestListUrdu : {
      screen : QuotesListScreenUrdu
  },
  QuoteDetailScreenUrdu : {
    screen : QuoteDetailScreenUrdu
},
 ShareScreenUrdu : {
     screen : ShareScreenUrdu
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
    },

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
    QuoteDetailScreenUrdu : {
        screen : QuoteDetailScreenUrdu
    },
    Share : {
        screen :ShareScreen,
        navigationOptions : {
            headerTitle : "Share Options"
        }
    },

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

const SettingsStock = createStackNavigator({
   
    Cart : {
        screen : SettingsScreen,
        navigationOptions:{
            headerTitle : "Settings"
        }
    },
}, defaultOptionsForStack

);   


const RatingStock = createStackNavigator({
   
    Rating : {
        screen : RatingScreen,
        navigationOptions:{
            headerTitle : "Rate Us"
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
        Urdu : {
            screen : UrduStock,
                navigationOptions : {
                    drawerIcon: ({ tintColor }) => {
                        return   <Icon name="feather-alt" size={20} color={tintColor} />
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
    "Settings" : {
        screen : SettingsStock,
        navigationOptions : {
            drawerIcon: ({ tintColor }) => {
                return   <FontAwesome name="gear" size={20} color={tintColor} />
               }
    }
    },
    "Rate Us" : {
        screen : RatingStock,
        navigationOptions : {
            drawerIcon: ({ tintColor }) => {
                return   <FontAwesome name="star" size={20} color={tintColor} />
               }
    }
    },
    
    
    },
    {
        contentOptions: {
            activeTintColor: "#33ff33",
            activeBackgroundColor : "#000000",
            inactiveTintColor:"white",
            fontFamily:"KulimPark-Regular", 
        },
        contentComponent: (props) => (
           
         <SafeAreaView style={{backgroundColor:"#1a1a1a", color:"white", flex:1}}>
             <View style={{height: 100,alignItems: 'center', justifyContent: 'center'}}>
             <ImageBackground resizeMode="cover" source={require("../assets/images/qu.jpg")} style={{width: '100%', height: '100%'}}>
                <Text style={{fontSize:20, color:"white", textAlign : "left", marginTop:18, marginLeft:30, fontFamily:"BebasNeue-Regular"}}>Success</Text>
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











