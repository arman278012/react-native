import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProductCard from '../components/ProductCard';

const HomeScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch products
    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data); // Store the fetched products
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false); // Stop the loader
        }
    };

    // Fetch products on component mount
    useEffect(() => {
        fetchProducts();
    }, []);

    // Handle navigation to ProductDetails
    const handleProductPress = (product) => {
        navigation.navigate('ProductDetails', { product });
    };

    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.gradient}>
            <View style={styles.container}>
                {loading ? (
                    // Show loader while fetching data
                    <ActivityIndicator size="large" color="#fff" />
                ) : (
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id.toString()} // Convert ID to string
                        renderItem={({ item }) => (
                            <ProductCard
                                product={item}
                                onPress={() => handleProductPress(item)}
                            />
                        )}
                        numColumns={3}
                        columnWrapperStyle={styles.row}
                    />
                )}
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 10,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
});

export default HomeScreen;
