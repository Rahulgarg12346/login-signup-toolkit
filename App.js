import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/container/Home';
import Signup from './src/container/Signup';
import Login from './src/container/Login';
import {Provider} from 'react-redux';
import store from './store';
import HomeScreen from './src/container/HomeScreen';
import ForgotPassword from './src/container/ForgotPassword';
import OTPVerification from './src/container/OTPVerification';
import PasswordReset from './src/container/PasswordReset';
import RestaurantDetailsScreen from './src/container/RestaurantDetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="OTPVerification" component={OTPVerification} />
          <Stack.Screen name="PasswordReset" component={PasswordReset} />
          <Stack.Screen
            name="RestaurantDetailsScreen"
            component={RestaurantDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

App.js;
// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
// import LoginScreen from './LoginScreen';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <LoginScreen />
//     </Provider>
//   );
// };

// export default App;
