import React from 'react'

import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { selectCartItems } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.scss'

const CartIcon = ({ toggleCartHidden , cartCount}) => {
    let accumulator = 0

    return (<div className='cart-icon' onClick={ toggleCartHidden } >
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">
        {cartCount}
        </span>
    </div>)
}

// const mapStateToProps = (state) => (
//     {hidden: state.cart.hidden}
// )

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    cartCount: selectCartItems(state).reduce((acc, cartItem)=> (acc + cartItem.quantity), 0)
})

export default connect(mapStateToProps ,mapDispatchToProps)(CartIcon)