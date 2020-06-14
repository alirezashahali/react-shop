export const cartItemReducer = (cartItems, item) => {
    const index = cartItems.findIndex(cartitem => cartitem.id === item.id)
    if(cartItems[index].quantity <= 1){
        return cartItems.filter(cartitem => cartitem.id !== item.id )
        
    }else{
        cartItems[index].quantity = cartItems[index].quantity -1
        return cartItems
    }
}