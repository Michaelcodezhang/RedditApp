import React, {Component} from 'react'

class Cat extends Component {
  render () {
    return (
      <div>
        <h1>This is a lovely cat!</h1>
        <img src={require('../images/cat.jpg')} style={{height:'300px'}} />
      </div>
    )
  }
}

export default Cat
