import React from 'react'

import './itemcard.scss'

const ItemCard= ({name, imageUrl, price})=>(
    <div className="collection-item">
        <div className="image" style={{
            backgroundImage:`url(${imageUrl})`
        }}>
            <button className="collection-item__btn-cart-adder">Add to cart</button>
        </div>

        <div className="collection-footer">
            <div className='name'>{name}</div>
            <div className="price">{price}$</div>
        </div>
    </div>
)

export default ItemCard