import React from 'react';
import './previewcollection.scss'
import ItemCard from '../itemCard/itemcard'

const PreviewCollection = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className="title">{ title }</h1>
        <div className="preview">
            {items.filter((item, index) => {return index<4}).map(item => (
                <ItemCard key={item.id} item={item}></ItemCard>
            ))}
        </div>
    </div>
)

export default PreviewCollection
