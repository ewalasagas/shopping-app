import Order from "../../models/order";
import { ADD_ORDER } from "../actions/orders";

const initialState = {
    orders: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER: 
            //toString is dummy data for now -- will dynamicall generate w/ DB
            const newOrder = new Order(
                new Date().toString(), 
                action.orderData.items, 
                action.orderData.amount,
                new Date()
            );
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }
    }

    return state;
}