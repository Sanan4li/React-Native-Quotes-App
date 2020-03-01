import React , {Component} from "react";
import {AppState} from "react-native";
import QuotesData from "./QuotesData";
import PushNotification from 'react-native-push-notification';
import { openDatabase } from 'react-native-sqlite-storage';
class SendNotification extends Component{
    state = {
          data : QuotesData,
          selectedData: null,
          notifications:null,
    }
    getSettings = ()=>{
        var db = openDatabase({ name: 'test.db' });
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM setting', [], (tx, results) => {
              var temp = [];
              for (let i = 0; i < results.rows.length; ++i) {
                temp.push(results.rows.item(i));
              }
              console.log(temp)
              if(temp[0].notifications=="Urdu"){
                let id =  Math.floor(Math.random() * (2122 - 1797 + 1)) + 1797;
                let data = this.state.data[id];
                 this.setState({
                     selectedData:data
                 },()=>{
                     console.log(this.state.selectedData);
                     console.log(id);
                 });
                   
              }
              else if(temp[0].notifications=="English"){
                let id =  Math.floor(Math.random() * (1797 - 0 + 1)) + 0;
                let data = this.state.data[id];
                 this.setState({
                     selectedData:data
                 },()=>{
                     console.log(this.state.selectedData);
                     console.log(id);
                 });
              }
              else if(temp[0].notifications=="Both"){
                let id =  Math.floor(Math.random() * (2122 - 0 + 1)) + 0;
                let data = this.state.data[id];
                 this.setState({
                     selectedData:data
                 },()=>{
                     console.log(this.state.selectedData);
                     console.log(id);
                 });
              }
              });
            });
         

      }
    componentDidMount = ()=>{
        this.getSettings();
        
        AppState.addEventListener('change', this.handleAppStateChange);
      
    }
    // register = (notification)=>{
    //     let id =  Math.floor(Math.random() * (400 - 0 + 1)) + 0;
    //     let data = this.state.data[id];
      
    //      this.setState({
    //          selectedData:data
    //      });
    //        AppState.addEventListener('change', this.handleAppStateChange);
    //  }
    componentWillUnmount() {
        
        AppState.removeEventListener('change', this.handleAppStateChange);
      };
    handleAppStateChange = (appState) =>{
      
        if (appState === 'background') {
        let seconds = Math.floor(Math.random() * (86400 - 82300 + 1)) + 82300;
          console.log("App is in Background");
         console.log(seconds);
          // Schedule a notification
          PushNotification.localNotificationSchedule({
            title: "Quote of The Day", // (optional)
            message: this.state.selectedData.body, // (required)
            actions: '["View"]',    // (Android only) See the doc for notification actions to
            largeIcon: "icon", // (optional) default: "ic_launcher"
            smallIcon: "icon", 
            quoteInfo: {id:this.state.selectedData.id, category:this.state.selectedData.category, body: this.state.selectedData.body, by:this.state.selectedData.by },
           date: new Date(Date.now() + (11 * 1000)) // in 3 secs
         });
        }
       
      };
    render(){
        //this.getSettings();
      
        return(
           
            null
        );
    }
}
export default SendNotification;