import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Hello Heroku</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  txt: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default App;
