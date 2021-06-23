import React from 'react';
import {Platform} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {ProductsNavigator, OrdersNavigation, AdminNavigator} from "./ShopNavigator";
import OrdersScreen from '../screens/shop/OrdersScreen';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContentOptions={{activeTintColor: Colors.primary}}>
            <Drawer.Screen 
                name="Products" 
                component={ProductsNavigator} 
                options={{
                    title: 'Product',
                    drawerIcon: ({color}) => (
                        <Ionicons 
                            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'} 
                            size={23} 
                            color={color} 
                        />
                    )
                  }}
            />
                    
            <Drawer.Screen 
                name="Orders" 
                component={OrdersNavigation} 
                options={{
                    title: 'Orders',
                    drawerIcon: ({color}) => (
                        <Ionicons 
                            name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
                            size={23} 
                            color={color}
                        />
                    )
                  }}
            />
            <Drawer.Screen 
                name="Admin" 
                component={AdminNavigator} 
                options={{
                    title: 'Admin',
                    drawerIcon: ({color}) => (
                        <Ionicons 
                            name={Platform.OS === 'android' ? 'md-create' : 'ios-create'} 
                            size={23} 
                            color={color}
                        />
                    )
                  }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;