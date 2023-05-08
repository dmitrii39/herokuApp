import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal} from 'react-native';
import axios from 'axios';


const ProductsScreen = ({ navigation, route }) => {
    const email = route.params.email;
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    useEffect(() => {
  
      axios.get('https://fakestoreapi.com/products')
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error)
        });
    }, []);


    const handleProductPress = (product) => {
        setSelectedProduct(product);
      };
    
      const handleCloseModal = () => {
        setSelectedProduct(null);
      };
      const handlegoHome = () => {
        navigation.navigate('ToBegin');
      };
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity
            onPress={handlegoHome}
            style={styles.goHomeButton}>
                <Text style={styles.goHomeText}>
                {`< Home`}
                </Text>
                </TouchableOpacity>
            <Text style={styles.userName}>{email}</Text>
        </View>
             <ScrollView 
             showsVerticalScrollIndicator ={false} 
             >
        {products.map((product) => (
          <TouchableOpacity key={product.id} style={styles.card} onPress={() => handleProductPress(product)}>
            <Text style={styles.title}>{product.title}</Text>
            <Image style={{ width: 200, height: 200, alignSelf: 'center', marginBottom: 6}} source={{ uri: product.image }} />
            <Text style={styles.desciption}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <Modal
       visible={selectedProduct !== null} 
       transparent={true}
       animationType='slide'
       >
        
        <TouchableOpacity  activeOpacity={1} style={styles.modalContainer} onPress={handleCloseModal}>
      <Image style={styles.modalImage} source={{ uri: selectedProduct?.image }} />
      <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  </Modal>
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
    marginBottom: 8,
    },
    desciption: {},
    price: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008080',
    },
    modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    },
    modalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    },
    closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  
    borderRadius: 20,
    padding: 10,
    },
    closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    },
    header: {
        width: '100%',
        height: 120,
        justifyContent: 'center',
        backgroundColor: '#33FF96',
        marginBottom: 10,
    },
    userName: {
        alignSelf: 'center',
        fontSize: 26
    },
    goHomeButton: {
     position: 'absolute',
     top: 48,
     left: 20,
    },
    goHomeText: {
        fontSize: 20
    }
    });
    
    export default ProductsScreen;