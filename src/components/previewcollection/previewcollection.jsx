import React from 'react';
import './previewcollection.scss'
import ItemCard from '../itemCard/itemcard'
import { Link, withRouter } from 'react-router-dom'

const PreviewCollection = ({ match, title, items }) => {
    // console.log('match', match)
    return (
    <div className='collection-preview'>
    <Link className='link' to={`${match.path}/${title.toLowerCase()}`} ><h1 className="title">{ title }</h1></Link>
        <div className="preview">
            {items.filter((item, index) => {return index<4}).map(item => (
                <ItemCard key={item.id} item={item}></ItemCard>
            ))}
        </div>
    </div>
)};

export default withRouter(PreviewCollection)
