import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button'

import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item'

import { selectCartItems } from '../../redux/cart/cart.selectors'

const CartDropdown = ({cartItems, cartCount}) => (
    <div className="cart-dropdown" >
        <div className="cart-items"> 
            {cartItems.map((cartItem) =>(
              <CartItem key={cartItem.id} item = {cartItem}></CartItem>
            ))}
          <CustomButton>GO TO CHECKOUT </CustomButton>
        </div>
    </div>
)

const mapStateToProps = (state) => (
  { cartItems: selectCartItems(state),
    cartCount: selectCartItems(state).reduce((acc, cartItem)=> (acc + cartItem.quantity), 0)
  }
)

export default connect(mapStateToProps)(CartDropdown)