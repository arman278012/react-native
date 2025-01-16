import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailsCard from '../components/ProductDetailsCard';
import SettingScreen from '../components/SettingScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Stack Navigator for Home and Product Details
const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsCard} />
        </Stack.Navigator>
    );
};

// Main App Navigator with Drawer
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: true, // Show or hide the top header
                    drawerStyle: { backgroundColor: '#fff', width: 250 }, // Drawer styling
                }}
            >
                <Drawer.Screen name="Home" component={HomeStackNavigator} />
                <Drawer.Screen name="Settings" component={SettingScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
