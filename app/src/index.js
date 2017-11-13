import React from 'react'
import { render } from 'react-dom'
import RouterApp from './router/index'
import { Provider } from 'react-redux'
import configureStore from './stores/index'

const store = configureStore()

console.log('hello')
render(
  <Provider store={store}>
    {RouterApp(store)}
  </Provider>,
  document.getElementById('root')
)
console.log('hello')
