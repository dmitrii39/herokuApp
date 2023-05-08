import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function ToBeginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Products')} style={styles.toBeginButton}>
        <Text style={styles.txt}>Начать</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#33DAFF', 
  },
  toBeginButton: {
    backgroundColor: '#33FF96', 
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txt: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFF', 
  },
});

export default ToBeginScreen;


