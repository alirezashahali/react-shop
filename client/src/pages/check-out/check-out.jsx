import React from 'react';
import './check-out.scss'

// import { createStructuredSelector } from 'reselect'

import { selectCartItems } from '../../redux/cart/cart.selectors'
// import { toggleCartHidden, removeItem } from '../../redux/cart/cart.actions'

import { connect } from 'react-redux'

import CheckOutItem from '../../components/checkout-item/checkout-item'

import StripeCheckout from '../../components/stripe-button/stripe-button'

const CheckOut = ( { cartItems, overAllPrice, toggleCartHidden, removeItem } ) => {
    // {toggleCartHidden}

    return (<div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>

            <div className="header-block">
                <span>Description</span>
            </div>

            <div className="header-block">
                <span>Quantity</span>
            </div>

            <div className="header-block">
                <span>Price</span>
            </div>

            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckOutItem key={cartItem.id} item={cartItem}></CheckOutItem>
            ))
        }
        <div className='total'>TOTAL: ${overAllPrice}</div>

        <div className='aclamation'>
            <div>"Please use the following test credit card for payment"</div>
            <div>
                4242 4242 4242 4242-Exp:01/20-CVV:123
            </div>
        </div>

        <div className="margin-adder">
            <StripeCheckout price={overAllPrice}/>
        </div>
        
    </div>)
}

// const mapDispatchToProps = dispatch => (
//     {
//         toggleCartHidden: () => dispatch(toggleCartHidden()),
//         removeItem: (item) => dispatch(removeItem(item))
//     }
// )

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    overAllPrice: selectCartItems(state).reduce((acc, cartItem) => (acc + (cartItem.quantity* cartItem.price)) , 0),
    cartCount: selectCartItems(state).reduce((acc, cartItem)=> (acc + cartItem.quantity), 0)
})

export default connect(mapStateToProps)(CheckOut)