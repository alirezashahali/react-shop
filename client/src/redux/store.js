import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './root-sagas'

import { persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware];

if(process.env.NODE_ENV === 'developement'){
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store