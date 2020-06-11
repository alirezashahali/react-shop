import ShopActionTypes from './shop.types.js'
import { firestore, convertCollectionsSnapshotToMap } from '../../fire-base/fire-base.utils'

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionsFailure = (errMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errMessage
})

// export const fetchCollectionsStartAsync = () => (dispatch) =>{
//         const collectionRef = firestore.collection("collections")

//         dispatch(fetchCollectionsStart())

//         collectionRef.get().then(
//             snapShot => {
//                 const collectionMap = convertCollectionsSnapshotToMap(snapShot)
//                 // this.setState({isloading: false})
//                 dispatch(fetchCollectionsSuccess(collectionMap))
//             }
//         ).catch(err => dispatch(fetchCollectionsFailure(err.message)))
// }