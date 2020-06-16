import React from 'react'

import faker from 'faker'

import Picture from './Picture'
import Description from './Description'
import NumberOfFriends from './NumberOfFriends'

export default class ProfileContainer extends React.Component {

  getFakeImage () {
    return faker.image.avatar()
  }

  getFakeName () {
    return faker.name.findName()
  }

  getFakeYear () {
    let _from = new Date(0)
    let _to = new Date()
    return faker.date.between(_from, _to).getFullYear()
  }

  getFakeDescription () {
    return faker.random.words(30)
  }

  getFakeNumber () {
    return faker.random.number(100)
  }

  render() {
    return (
      <div className="ui card">
        <Picture image={this.getFakeImage()}/>
        <Description 
          name={this.getFakeName()} 
          joined={this.getFakeYear()} 
          description={this.getFakeDescription()}/>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            <NumberOfFriends numberOfFriends={this.getFakeNumber()}/>
          </a>
        </div>
      </div>
    )
  }
}