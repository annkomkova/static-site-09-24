import React from 'react'
import classNames from 'classnames'

const A_Text = ({ text, type }) => {
  const classes = classNames('A_Text', type)
  return <div className={classes}>{text}</div>
}

// const A_Text = ({ type, text }) => {
//   switch (type) {
//     case 'h1':
//       return <h1 className="A_Text">{text}</h1>
//     case 'h2':
//       return <h2 className="A_Text">{text}</h2>
//     case 'p':
//       return <p className="A_Text">{text}</p>
//     case 'tag':
//       return <span className="A_Text A_Text--tag">{text}</span>
//     default:
//       return <span className="A_Text">{text}</span>
//   }
// }

export default A_Text
