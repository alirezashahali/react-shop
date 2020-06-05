import React from 'react';
import './check-out.scss'

import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartItemsAllPrice } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { connect } from 'react-redux'

import CheckOutItem from '../../components/checkout-item/checkout-item'

const CheckOut = ( { cartItems, overAllPrice, toggleCartHidden } ) => {
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
        
    </div>)
}

const mapDispatchToProps = dispatch => (
    {toggleCartHidden: () => dispatch(toggleCartHidden())}
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    overAllPrice: selectCartItemsAllPrice
})

export default connect(mapStateToProps)(CheckOut)