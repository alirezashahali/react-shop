import { connect } from 'react-redux'
import CollectionPage from './collection'
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner'

const mapStateToProps = state => ({
    isLoading: !selectIsCollectionLoaded(state)
})

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage))

export default CollectionPageContainer