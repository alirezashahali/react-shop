import React from 'react'
import './collections-overview.scss'

import { connect } from 'react-redux'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import PreviewCollection from '../previewcollection/previewcollection'

const CollectionsOverview = ({collections})=>{ 

    return (<div className='collections-overview'>
        {
            collections.map(({id, ...others}) => (
                <PreviewCollection key={ id } {...others}>
                </PreviewCollection>
            ))
        }
    </div>)
}



const mapStateToProps = (state) => ({
    collections: selectCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionsOverview)