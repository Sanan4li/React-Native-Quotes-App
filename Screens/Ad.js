import React, {Component} from "react";
import {Text, View} from "react-native";
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
  } from 'react-native-admob';

class Ad extends Component{
    render(){
        // ca-app-pub-7101577265463479/1778958018
        // test unit ca-app-pub-3940256099942544/6300978111
        // download ca-app-pub-7101577265463479/4284636191
        return(
              <AdMobBanner
               adSize={this.props.size}
               adUnitID="ca-app-pub-7101577265463479/4284636191"
              // testDevices={[AdMobBanner.simulatorId]}
              // onAdFailedToLoad={error => console.error(error)}
            /> 
        )
    }
}
export default Ad;