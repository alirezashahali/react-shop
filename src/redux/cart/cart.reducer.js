import CartActionTypes from './cart.types'
import { cartItemReducer } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {...state,
                    hidden: !state.hidden}

        case CartActionTypes.ADD_ITEM:
            const index = state.cartItems.findIndex(item => (
                item.id === action.payload.id
            ))

            if(index > -1){
                let cartItems = state.cartItems
                let cartItem = cartItems[index]
                cartItem = {...cartItem, quantity: (cartItem.quantity+1)}
                cartItems[index] = cartItem
                return {
                    ...state,
                    cartItems: cartItems
                }
            }else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, {...action.payload, quantity: 1 }]
                }
            }

        
        case CartActionTypes.REMOVE_ITEM:
            const cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            return {
                ...state,
                cartItems: cartItems
            }


        case CartActionTypes.REDUCE_ITEM:

            return {
                ...state,
                cartItems: cartItemReducer(state.cartItems, action.payload)
            }


        default:
            return state
    }
}

export default cartReducer