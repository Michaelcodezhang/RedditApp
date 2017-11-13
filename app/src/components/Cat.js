import React, {Component} from 'react'

class Cat extends Component {
  render () {
    return (
      <div>
        This is a lovely cat!
        <img src={require('../images/cat.jpg')} style={{height:'300px'}} />
      </div>
    )
  }
}

export default Cat
