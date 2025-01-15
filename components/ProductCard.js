import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        {/* Display product image */}
        <Image
            source={{ uri: product.image }}
            style={styles.image}
            defaultSource={require('../assets/icon.png')} // Your default image
        />

        {/* Display product title */}
        <Text style={styles.name}>{product.title}</Text>

        {/* Display product price */}
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>

        {/* Optional: Display rating if present */}
        {product.rating && (
            <Text style={styles.rating}>
                ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </Text>
        )}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 10,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    price: {
        fontSize: 12,
        color: '#777',
        marginVertical: 5,
    },
    rating: {
        fontSize: 12,
        color: '#555',
        marginTop: 5,
    },
});

export default ProductCard;
