import React from 'react';
import { FlatList, Text } from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import ProductDetailScreen from './ProductDetailScreen';

const ProductsOverviewScreen = ({ navigation }) => {
    const products = useSelector(state => state.products.availableProducts);
    return(
        <FlatList 
            data={products} 
            renderItem={itemData =>    
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
                    onAddToCart={() => {}}
                />
        } />
    );
};

export default ProductsOverviewScreen;