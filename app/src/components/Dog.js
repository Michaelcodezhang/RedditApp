import React, {Component} from 'react'

class Dog extends Component {
  render () {
    return (
      <div>
        <h2>This is lovely dog~</h2>
        <img src={require('../images/dog.jpg')} style={{height: '300px'}} />
      </div>
    )
  }
}

export default Dog
