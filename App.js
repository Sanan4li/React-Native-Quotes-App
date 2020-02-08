import React from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import AppContainer from "./Navigation/NavigationConfig";
import {init} from "./Screens/Database";
import SplashScreen from "./Screens/SplashScreen";



class  App extends React.Component {
  state = {
    loaded:false,
  }
  componentDidMount = ()=>{
    init();
    setTimeout(this.loadApp,100);

  }
  loadApp = ()=>{
    this.setState({
      loaded:true
    });
  }
  render(){
   
    let component = <SplashScreen/>
    if(this.state.loaded){
      component = <AppContainer/>
    }
    return (
      <View style={{backgroundColor:"#1a1a1a", flex:1}}>
        {component}
      </View>
      
     
     )
  }
 
  }
export default App;









