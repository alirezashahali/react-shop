import userActionTypes from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionTypes.GOOGLE_SIGNIN_SUCCESS:
        case userActionTypes.EMAIL_SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case userActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case userActionTypes.SIGN_OUT_FAILURE:
        case userActionTypes.GOOGLE_SIGNIN_FAILURE:
        case userActionTypes.EMAIL_SIGNIN_FAILURE:
            return {
                ...state,
                error: action.payload
            }



        default:
            return state;
    }
}

export default userReducer