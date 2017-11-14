import React from 'react'
import {render} from 'react-dom'
import RouterApp from './router/index'
import {Provider} from 'react-redux'
// import configureStore from './stores/index'
import {createStore, applyMiddleware} from 'redux'
import rootReducers from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    {RouterApp(store)}
  </Provider>,
  document.getElementById('root')
)
