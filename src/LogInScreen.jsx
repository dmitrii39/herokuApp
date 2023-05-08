import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const validEmail = 'user@mail.ru'
const validPassword = '12345'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (email) => {
    setEmail(email);

  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const handleLogin = () => {
    navigation.navigate('Products')
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          autoCapitalize = 'none'
          keyboardType="email-address"
          onChangeText={handleEmailChange}
        />
        {emailError ? (
          <Text style={styles.error}>{emailError}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry
          keyboardType="numeric"
        />
        {email === validEmail && password === validPassword ? 
        <TouchableOpacity 
        style={styles.InActivebutton} 
        onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity> 
        : <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>}
        
      </View>
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
  form: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  InActivebutton: {
    backgroundColor: '#33DAFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#D3CBC9',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
  },

})

export default LoginScreen;