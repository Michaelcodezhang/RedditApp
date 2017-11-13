import React, { Component } from 'react'
import Navigation from '../components/Navigation/index'

export default class Root extends Component {
  render () {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    )
  }
}