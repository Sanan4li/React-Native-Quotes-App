import React from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import AppContainer from "./Navigation/NavigationConfig";

// }
// async function requestAll() {
//   const cameraStatus = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
//   const contactsStatus = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
//   return {cameraStatus, contactsStatus};
// }
const App =  () => {
  return (
   <AppContainer/>

  )
  }
export default App;
