import React from 'react'

import './itemcard.scss'
// import CustomButton from '../custom-button/custom-button'
import { addItem } from '../../redux/cart/cart.actions'

import { connect } from 'react-redux'

const ItemCard= ({item, addItem})=> {
    const {name, price, imageUrl} = item

    return (
    <div className="collection-item">
        <div className="image" style={{
            backgroundImage:`url(${imageUrl})`
        }}>
            <button onClick={() => addItem(item) } className="collection-item__btn-cart-adder">Add to cart</button>
        </div>

        <div className="collection-footer">
            <div className='name'>{name}</div>
            <div className="price">{price}$</div>
        </div>

    </div>)
}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ItemCard)