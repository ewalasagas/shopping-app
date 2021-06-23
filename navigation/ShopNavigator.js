import React from 'react';
import {Platform} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
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
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item title='Menu' iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                            onPress={() => navigation.toggleDrawer()}
                            />
                        </HeaderButtons>
                    ),
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

const OrdersNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Orders" 
                component={OrdersScreen} 
                options={({navigation, route}) => ({
                    headerTitle: 'Your Orders',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item title='Menu' iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                            onPress={() => navigation.toggleDrawer()}
                            />
                        </HeaderButtons>
                    ),
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
        </Stack.Navigator>
    )
}

const AdminNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="UserProductsScreen" 
                component={UserProductsScreen} 
                options={({navigation, route}) => ({
                    headerTitle: 'Your Products',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item title='Menu' iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                            onPress={() => navigation.toggleDrawer()}
                            />
                        </HeaderButtons>
                    ),
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
        </Stack.Navigator>
    )
}


export {ProductsNavigator, OrdersNavigation, AdminNavigator};