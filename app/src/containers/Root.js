import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../stores/index'
import AsyncApp from './AsyncApp'

console.log('2')
const store = configureStore()
console.log('3')
export default class Root extends Component {
  render () {
    console.log('1')
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    )
  }
}