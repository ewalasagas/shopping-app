import React from 'react';
import {FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const UserProductsScreen = props => {
    const userProducts = useSelector(state => state.products.userProducts);

    return (
        <FlatList 
            keyExtractor={item => item.id}
            data={userProducts}
            renderItem={itemData => 
                <ProductItem 
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={()=>{}}
                    onAddToCart={()=>{}}
                />
            
            }
        />
    );
}

export default UserProductsScreen;