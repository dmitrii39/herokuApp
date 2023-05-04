import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function ToBeginScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.toBeginButton}>
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
    backgroundColor: '#33DAFF', // Цвет фона
  },
  toBeginButton: {
    backgroundColor: '#33FF96', // Цвет кнопки
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000', // Добавление тени
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
    color: '#FFF', // Цвет текста
  },
});

export default ToBeginScreen;


