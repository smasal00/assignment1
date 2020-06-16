import React from 'react'

export default class Descriptor extends React.Component {
  render() {
    return (
      <div className="content">
        <a className="header" href="#">{ this.props.name }</a>
        <div className="meta">
          <span className="date">Joined in { this.props.joined }</span>
        </div>
        <div className="description">
        { this.props.description }
        </div>
      </div>
    )
  }
}