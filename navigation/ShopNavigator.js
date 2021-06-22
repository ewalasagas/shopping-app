import React from 'react';
import { View, Text } from 'react-native';
import {Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const ProductsNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="ProductsOverviewScreen">
            <Stack.Screen 
                name="ProductsOverviewScreen"
                component={ProductsOverviewScreen}
                options={{
                    headerTitle: 'All Products',
                    headerStyles: {
                        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
                    },
                    headerTintColor: Platform.OS === 'android' ? 'black' : Colors.primary,
                    headerTitleStyle: {
                        fontFamily: 'open-sans-bold',
                    },
                    headerBackTitle: {
                        fontFamily: 'open-sans'
                    }
                }}
            />
            <Stack.Screen 
                name="ProductDetailScreen"
                component={ProductDetailScreen}
                options={({route}) => ({
                    title: route.params.productTitle
                })}
            />
        </Stack.Navigator>
    )
}

export {ProductsNavigator};