import React from 'react'
import './checkout-item.scss'

import { connect } from 'react-redux'

import { selectCartItems } from '../../redux/cart/cart.selectors'

import { removeItem, addItem, reduceItem } from '../../redux/cart/cart.actions'

const CheckOutItem = ({ item, removeItem, addItem, reduceItem, cartCount }) => {
    const {imageUrl, name, quantity, price} = item

    return (<div className="checkout-item">
        <div className="image-container">
            <img alt='item' src={imageUrl}></img>
        </div>
        <span className='name'>{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => reduceItem(item)} >&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className="arrow" onClick={ () => addItem(item) } >&#10095;</div>
        </span>
        <span className="price">${price}</span>
        <div className='remove-button' onClick={()=> removeItem(item)} >&#10005;</div>
    </div>)
}

const mapDispatchToState = (dispatch) => ({
    removeItem: (item) => dispatch(removeItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    reduceItem: (item) => dispatch(reduceItem(item))
})

const mapStateToProps = state => (
    {
        cartCount: selectCartItems(state).reduce((acc, cartItem)=> (acc + cartItem.quantity), 0),
    }
)

export default connect(mapStateToProps, mapDispatchToState)(CheckOutItem)