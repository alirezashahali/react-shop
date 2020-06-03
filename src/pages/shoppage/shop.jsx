import React from 'react';
import './shop.scss'
import collections from './shop.data'
import PreviewCollection from '../../components/previewcollection/previewcollection'

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections
        }
    }

    render(){
        // const {collections} = this.state
        return(

            <div className="shop-page">
                {
                    this.state.collections.map(({id, ...others}) => (
                        <PreviewCollection key={ id } {...others}>

                        </PreviewCollection>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage