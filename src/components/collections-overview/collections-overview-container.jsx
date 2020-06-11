import { connect } from 'react-redux'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner'
import CollectionsOverview from './collections-overview'

const mapStateToProps = (state) => ({
    isLoading: selectIsCollectionFetching(state)
})

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))

export default CollectionsOverviewContainer