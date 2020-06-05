import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button'

import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({cartItems, cartCount, history, toggleCartHidden}) => {

  return(<div className="cart-dropdown" >
      <div className="cart-items"> 
          {
            cartItems.length ?
            cartItems.map((cartItem) =>(
            <CartItem key={cartItem.id} item = {cartItem}></CartItem>
          )) : <div className="empty-massage">Your cart is empty</div>
          }
        <CustomButton onClick={() => {
          toggleCartHidden();
          history.push('/checkout')
        }} >GO TO CHECKOUT </CustomButton>
      </div>
  </div>)
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => (
  { cartItems: selectCartItems(state),
    cartCount: selectCartItems(state).reduce((acc, cartItem)=> (acc + cartItem.quantity), 0)
  }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))