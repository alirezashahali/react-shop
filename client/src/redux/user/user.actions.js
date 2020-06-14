import userActionTypes from './user.types'

export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGNIN_START
})

export const googleSignInSuccess = user => ({
    type: userActionTypes.GOOGLE_SIGNIN_SUCCESS,
    payload: user
})

export const googleSignInFailure = error => ({
    type: userActionTypes.GOOGLE_SIGNIN_FAILURE,
    payload: error
})


export const emailSignInStart = emailAndPassword => ({
    type: userActionTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword
})

export const emailSignInSuccess = user => ({
    type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
    payload: user
})

export const emailSignInFailure = error => ({
    type: userActionTypes.EMAIL_SIGNIN_FAILURE,
    payload: error
})

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error
})