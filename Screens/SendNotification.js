import React , {Component} from "react";
import {AppState} from "react-native";
import QuotesData from "./QuotesData";
import PushNotification from 'react-native-push-notification';
class SendNotification extends Component{
    state = {
        data : QuotesData,
          selectedData: null,
    }
    componentDidMount = ()=>{
       let id =  Math.floor(Math.random() * (400 - 0 + 1)) + 0;
       let data = this.state.data[id];
     
        this.setState({
            selectedData:data
        });
          AppState.addEventListener('change', this.handleAppStateChange);
    }
    componentWillUnmount() {
        
        AppState.removeEventListener('change', this.handleAppStateChange);
      };
    handleAppStateChange = (appState) =>{
      
        if (appState === 'background') {
        let seconds = Math.floor(Math.random() * (86400 - 85300 + 1)) + 85300;
          console.log("App is in Background");
         console.log(seconds);
          // Schedule a notification
          PushNotification.localNotificationSchedule({
            title: "Quote of The Day", // (optional)
            message: this.state.selectedData.body, // (required)
            actions: '["View"]',    // (Android only) See the doc for notification actions to
            largeIcon: "icon", // (optional) default: "ic_launcher"
            smallIcon: "icon", 
            quoteInfo: {id:"1", category:this.state.selectedData.category, body: this.state.selectedData.body, by:this.state.selectedData.by },
           date: new Date(Date.now() + (seconds * 1000)) // in 3 secs
         });
        }
       
      };
    render(){
        return(
            null
        );
    }
}
export default SendNotification;