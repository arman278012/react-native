import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ProductDetailsCard = ({ route }) => {
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{product.title}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: product.image }} style={styles.image} />
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>${product.price}</Text>
                <TouchableOpacity style={styles.cartButton}>
                    <Text style={styles.cartButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.aboutTitle}>About {product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
            </View>

            <View style={styles.categoryContainer}>
                <Text style={styles.category}>{product.category}</Text>
                <Text>⭐{product.rating.rate}</Text>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
    imageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        color: '#6B7280',
        // textAlign: "left",
        fontWeight: "900"
    },
    // cartButton: {
    //     display: "flex",
    //     color: "white",
    //     justifyContent: "center",
    //     alignItems: "center"
    // },
    title: {
        fontWeight: "900",
        fontSize: 15,
        textAlign: "center",
        marginBottom: 10
    },
    priceContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        marginBottom: 20
    },
    cartButtonText: {
        color: "red",
        borderRadius: 10,
        borderWidth: 2,  // Adds border width
        borderColor: "red",  // Sets the border color
        paddingHorizontal: 10,  // Optional, for better text padding inside the button
        paddingVertical: 5,  // Optional, for better vertical padding
    },
    description: {
        color: '#6B7280',
        textAlign: "justify",
        lineHeight: 18,
        textTransform: "capitalize",
        fontSize: 12
    },
    aboutTitle: {
        fontWeight: 900,
        marginBottom: 10
    },
    categoryContainer: {
        display: "flex",
        flexDirection: "row"
    }
});

export default ProductDetailsCard;