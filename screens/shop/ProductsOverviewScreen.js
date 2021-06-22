import React from 'react';
import { FlatList, Text } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import ProductDetailScreen from './ProductDetailScreen';
import * as cartActions from '../../store/actions/cart';

const ProductsOverviewScreen = ({ navigation }) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    
    return(
        <FlatList 
            data={products} 
            renderItem={itemData => (
                // <Text>{itemData.item.title}</Text>
                <ProductItem 
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {
                        navigation.navigate('ProductDetailScreen', {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title
                        })
                    }}
                    onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item));
                    }}
                />
            )}
        />
    );
};

export default ProductsOverviewScreen;