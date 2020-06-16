import React from 'react'

export default class NumberOfFriends extends React.Component {
  render() {
    return (
      <span>
        { this.props.numberOfFriends }  
      </span>
    )
  }
}