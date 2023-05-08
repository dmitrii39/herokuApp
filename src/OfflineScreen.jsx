import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

const OfflineScreen = () => {
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
    <View style={styles.container}>
     <Text style={styles.text}>Отсутствует подключение к интернету</Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#33DAFF',
        alignItems: 'center',
        justifyContent: 'center',
        },
  text: {
    fontSize: 26,
    textAlign: 'center'
  },
});

export default OfflineScreen;
