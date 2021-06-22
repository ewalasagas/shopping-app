import { registerRootComponent } from 'expo';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import {ProductsNavigator} from './navigation/ShopNavigator';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};


export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false);
 
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ProductsNavigator />
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
