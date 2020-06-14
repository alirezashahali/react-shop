import React from 'react';
import './shop.scss'
import { Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview-container'
import CollectionPageContainer from '../collection/collection-container'

// import WithSpinner from '../../components/with-spinner/with-spinner'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
// import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors'

// const CollectionPageWithSpinner = WithSpinner(CollectionPage)
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)

class ShopPage extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const {fetchCollectionsStart} = this.props
        fetchCollectionsStart()
    }

    render(){
        const { match } = this.props
        return (
            <div className="shop-page">
                <Switch>
                    <Route path={`${match.path}/:collectionId`}
                        component={CollectionPageContainer} />
                    <Route exact path={match.path}
                        component={CollectionsOverviewContainer} />
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

// const mapStateToProps = state => ({
//     isCollectionFetching: selectIsCollectionFetching(state),
//     isCollectionLoaded: selectIsCollectionLoaded(state)
// })

export default connect(null, mapDispatchToProps)(ShopPage)