import React from "react";
import {
    SafeAreaView, View, Text,StyleSheet,ScrollView
} from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator ,DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FavScreen from "../Screens/FavScreen";
import HomeScreen from "../Screens/HomeScreen";
import CategoriesScreen from "../Screens/CategoriesScreen";
import CartScreen from "../Screens/CartScreen";
import AboutScreen from "../Screens/AboutScreen";
const defaultOptionsForStack =  {
    defaultNavigationOptions: {
       
    headerStyle: {
        backgroundColor: '#FF543C',
        elevation: 0,
        shadowOpacity: 0
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
          
   

  }, defaultOptionsForStack
  
  );     

  const HomeStack = createStackNavigator({
   
    Home : {
        screen : HomeScreen,
        navigationOptions : {
          headerTitle : "Home Screen"
      }
    },
    About : {
        screen : AboutScreen, 
        
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
          headerTitle : "Wish List"
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
            headerTitle : "Items in Cart"
        }
    },
    
      

}, defaultOptionsForStack

);     





  const TabNavigator = createBottomTabNavigator({
    Home : {
        screen : HomeStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => {
                return   <Icon name="home" size={20} color={tintColor} />
               }
        }
    },  
    
    
    Categories: {
        screen :  CategoriesStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => {
             return   <FontAwesome name="th-list" size={20} color={tintColor} />
            }
                
            },
        
        
    },
    
    "Favourites": {
    screen :  FavStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => { 
                return   <Fontisto name="heart" size={20} color={tintColor} />
               }
    }
    },   
    Cart: {
        screen :  CartStack,
            navigationOptions : {
                tabBarIcon: ({ tintColor }) => {
                    return   <Icon name="shopping-cart" size={20} color={tintColor} />
                   }
        }
        },
  }, {
      tabBarOptions : {
        showLabel : false,
          activeTintColor : "#FF543C",
          inactiveTintColor : "black",
          tabStyle : {height : 50 , zIndex:99, borderColor:"white", borderTopWidth:0},
          labelStyle : {fontSize: 12, paddingTop:2,paddingBottom:3, fontFamily : "halfmoon_bold",},
      }
  }
  
  
  );

  const NavigationDrawer = createDrawerNavigator({
    Home: {
        screen : TabNavigator,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return   <Icon name="home" size={20} color={tintColor} />
                   }
        }
        },
    Categories : {
        screen : CategoriesScreen,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return   <Icon name="th-list" size={20} color={tintColor} />
                   }
        }
        },

    Favourites : {
        screen : FavScreen,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return    <Fontisto name="heart" size={20} color={tintColor} />
                   }
        }
        },
    Cart : {
        screen : CartScreen,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return   <Icon name="shopping-cart" size={20} color={tintColor} />
                   }
        }
        },
    About : {
        screen : AboutScreen,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return   <Entypo name="info-with-circle" size={20} color={tintColor} />
                   }
        }
        },
  
    
    

    },
    {
        contentComponent: (props) => (
         <SafeAreaView>
             <View style={{height: 100,alignItems: 'center', justifyContent: 'center'}}>
     
               <Text style={{fontSize: 32}}>LOGO</Text>
             </View>
           <ScrollView>
             <DrawerItems {...props} />
           </ScrollView>
         </SafeAreaView>
        )
     });

const AppContainer = createAppContainer(NavigationDrawer);

export default AppContainer ;











