////call fetch of SavedArtManager, sorted by boolean of visited:true
//http://localhost:5002/savedArt?visited=false
//http://localhost:5002/savedArt?visited=false&userId=1

import React, { Component } from 'react'

export default class HaveVisitedList extends Component {
  state = {
    visited: true
  }

  render() {
    return (
      <>
        <section className="haveVisited">
          {
            this.props.art.map(savedArt =>
              <div className="haveVisitedCard" key={savedArt.id}>
                <p>art title</p>
              </div>
              )
          }
        </section>
      </>
    )
  }
}

