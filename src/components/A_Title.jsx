// function A_Title() {
//   return <h1 className="A_Title">Заголовок</h1>
// }

// const user = {
//   name: 'John',
//   age: 36,
//   pet: 'cat'
// }

import React from 'react'

export default class A_Title extends React.Component {
  render() {
    return <h2 className="A_Title">{this.props.name}</h2>
  }
}
