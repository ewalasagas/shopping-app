import React from 'react';
import { View, Text } from 'react-native';
import {Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import Colors from '../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';

const Stack = createStackNavigator();

const ProductsNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="ProductsOverviewScreen">
            <Stack.Screen 
                name="ProductsOverviewScreen"
                component={ProductsOverviewScreen}
                options={({navigation, route}) => ({
                    headerTitle: 'All Products',
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item title='Cart' iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                            onPress={() => {
                                navigation.navigate('CartScreen')
                            }}/>
                        </HeaderButtons>),
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
                })}
            />
            <Stack.Screen 
                name="ProductDetailScreen"
                component={ProductDetailScreen}
                options={({route}) => ({
                    title: route.params.productTitle
                })}
            />
            <Stack.Screen 
                name="CartScreen"
                component={CartScreen}
                options={({route}) => ({
                    title: 'Cart'
                })}
            />
        </Stack.Navigator>
    )
}

export {ProductsNavigator};