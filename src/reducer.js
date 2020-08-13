export const initialState = {
    basket: [],
    user: null,
};
//Increment all the values or cost
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user:action.user,
            };
        case 'ADD_TO_BASKET':
            // Logic for adding to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // logic for removing item from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                //item exists in basket
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    'cant remove product'
                );
            }
            return {
                ...state,
                basket: newBasket,
            };
        default:
            return state;
    }
};

export default reducer;