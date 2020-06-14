import { takeLatest, put, all, call } from 'redux-saga/effects'
import userActionTypes from './user.types'

import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from '../../fire-base/fire-base.utils'

import { googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure, signOutSuccess, signOutFailure } from './user.actions'


export function* signInWithGoogle(){

    try{
        const {user} = yield auth.signInWithPopup(googleProvider)
        console.log('user', user)
        const userRef = yield call(createUserProfileDocument, user)
        console.log('userRef', userRef)
        const userSnapshot = userRef.get()
        console.log('userSnapshot', userSnapshot.data())
        yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))

    }catch(err){
        yield put(googleSignInFailure(err))
        console.log(err)
    }

}

export function* signInWithEmail({payload : { email, password } }){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        console.log('user', user)
        const userRef = yield call(createUserProfileDocument, user)
        console.log('userRef', userRef)
        const userSnapshot = userRef.get()
        console.log('userSnapshot', userSnapshot, 'data', userSnapshot.data())
        yield put(emailSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))

    }catch(error){
        yield put(emailSignInFailure(error))
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser()
        if(!userAuth) return;
        const userRef = yield call(createUserProfileDocument, userAuth)
        console.log('userRef', userRef)
        const userSnapshot = userRef.get()
        console.log('userSnapshot', userSnapshot.data())
        yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))

    }catch(err){
        yield emailSignInFailure(err)
    }
}

export function* signOut(){
    try{
        yield auth.signOut()
        yield put(signOutSuccess())
    }catch(err){
        yield put(signOutFailure(err))
    }
}

export function* onSignOutStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_START,
        signOut)
}

export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START,
        signInWithGoogle)
}

export function* onEmailSignInStart(){
    yield takeLatest(
        userActionTypes.EMAIL_SIGNIN_START,
        signInWithEmail
        )
}

export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,
        isUserAuthenticated)
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(isUserAuthenticated)])
}