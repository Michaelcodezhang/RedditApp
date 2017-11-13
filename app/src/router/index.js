import React from 'react'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'
import Root from '../containers/Root'
import AsyncApp from '../containers/AsyncApp'
import Cat from '../components/Cat'
import Dog from '../components/Dog'

const RouterApp = store => (
  <Router history={hashHistory}>
    <Route path='/' component={Root}>
      <IndexRoute component={AsyncApp} />
      <Route path='cat' component={Cat} />
      <Route path='dog' component={Dog} />
    </Route>
  </Router>
)

export default RouterApp
