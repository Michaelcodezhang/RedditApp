import React, {Component} from 'react'
import {Link} from 'react-router'

class Navigation extends Component{
  render () {
    return (
      <div className="nav-contain">
        <ol>
          <Link to='/'><li>main</li></Link>
          <Link to='cat'><li>cat</li></Link>
          <Link to='dog'><li>dog</li></Link>
        </ol>
      </div>
    )
  }
}

export default Navigation
