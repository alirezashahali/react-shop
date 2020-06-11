import { takeEvery, call, put } from 'redux-saga/effects'

import ShopActionTypes from './shop.types'

import { firestore, convertCollectionsSnapshotToMap } from '../../fire-base/fire-base.utils'

import {
    fetchCollectionsSuccess, fetchCollectionsFailure
} from '../../redux/shop/shop.actions'

export function* fetchCollectionsAsync(){
    yield console.log('I am fired')

    try{
        const collectionRef = firestore.collection("collections")
        const snapShot = yield collectionRef.get()
        const collectionMap = yield call(convertCollectionsSnapshotToMap, snapShot)
        yield put(fetchCollectionsSuccess(collectionMap))
    }catch(err){
        yield put(fetchCollectionsFailure(err.message))
    }
}

export function* fetchCollectionsStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync)
}