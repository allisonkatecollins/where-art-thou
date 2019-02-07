//call fetch of SavedArtManager, sorted by boolean of visited:false
import React, { Component } from 'react'

export default class ToVisitList extends Component {
  state = {
    visited: false
  }

  render() {
    return (
      <>
        <section className="toVisit">
          {
            this.props.art.map(savedArt =>
              <div className="toVisitCard" key={savedArt.id}>
                <p>art title</p>
              </div>
              )
          }
        </section>
      </>
    )
  }
}

