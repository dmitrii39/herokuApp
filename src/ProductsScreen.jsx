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
        style={{ width: 200, height: 200, alignSelf: 'center'}}
        source={{ uri: product.image }}
      />
           <Text style={styles.desciption}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
            
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
 
    card: {
      width: 350,
      marginBottom: 30,
    justifyContent: 'center',
      backgroundColor: '#33FF96',
      borderRadius: 10,
      padding: 10,
    },
    title: {
        alignSelf: 'center', 
        fontSize: 16, 
        fontWeight: 'bold', 
        marginBottom: 8 },
        desciption: {
            
        },
        price: { 
            alignSelf: 'center', 
            fontSize: 16, 
            fontWeight: 'bold', 
            color: '#008080' 
        }

})

  export default ProductsScreen;