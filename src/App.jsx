import React, { useState, useEffect } from 'react';
import ToBeginScreen from './ToBeginScreen';
import LoginScreen from './LogInScreen';
import ProductsScreen from './ProductsScreen';
import {NavigationContainer} from '@react-navigation/native';
import OfflineScreen from './OfflineScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NetInfo from "@react-native-community/netinfo";
const Stack = createNativeStackNavigator();
function App() {

  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}>
        {isConnected ? <Stack.Screen name="ToBegin" component={ToBeginScreen} /> : 
        <Stack.Screen name="OfflineScreen" component={OfflineScreen} />}
        
        
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
