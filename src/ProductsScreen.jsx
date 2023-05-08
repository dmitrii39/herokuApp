import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import axios from 'axios';


const ProductsScreen = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
  
      axios.get('https://fakestoreapi.com/products')
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error)
        });
    }, []);
  
    return (
      <View style={styles.container}>
        <ScrollView>
        {products.map((product) => (
          <View key={product.id} style={styles.card}>
            <Text style={styles.title}>{product.title}</Text>
            <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: product.image }}
      />
           <Text style={{ fontSize: 14, marginBottom: 8 }}>{product.description}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#008080' }}>${product.price}</Text>
            
          </View>
       
        
        ))}
         </ScrollView>
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
      backgroundColor: '#33FF96',
      borderRadius: 10,
      
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
    },
    button: {
      backgroundColor: '#33DAFF',
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
    card: {
      width: 350,
      marginBottom: 30,

      backgroundColor: '#33FF96',
      borderRadius: 10,
      padding: 10,
    },
    title: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        marginBottom: 8 },
        desciption: {
            
        }
})

  export default ProductsScreen;