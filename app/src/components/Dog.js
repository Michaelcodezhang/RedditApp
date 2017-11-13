import React, {Component} from 'react'

class Dog extends Component {
  render () {
    return (
      <div>
        This is lovely dog~
        <img src={require('../images/dog.jpg')} style={{height: '300px'}} />
      </div>
    )
  }
}

export default Dog
