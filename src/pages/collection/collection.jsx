import React from 'react'
import './collection.scss'

import ItemCard from '../../components/itemCard/itemcard'

import {connect} from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selectors'

const CollectionPage = ({ match, collection }) => {
    console.log("match" ,match)
    console.log("collection", collection)
    try{
        const { routeName, items } = collection
    }catch(err){
        return (
            <div>
                <h3>What the fuck you doin sucker</h3>
            </div>
        )
    }
    const { routeName, items } = collection

    return (
    <div className='collection-page'>
        <h1 className="title" >{ routeName }</h1>
        <div className="items">
            {
                items.map(item => (
                    <ItemCard key={item.id} item={item} ></ItemCard>
                ))
            }
        </div>
    </div>)
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)