//connects have visited and to visit
//make cards here and call them in have visited / to visit
//checkbox functionality

import React, { Component } from 'react'
//import HaveVisitedList from "./user-lists/have-visited/HaveVisitedList"
import ToVisitList from "./user-lists/to-visit/ToVisitList"

export default class MySavedArt extends Component {
  render() {
    return(
      <>
        <section className="mySavedArt">
          {
            this.props.art.map(savedArt =>
              <div className="savedArtCard" key={savedArt.id}>
                <h2> {ToVisitList.savedArt.title} </h2>
                <h3> {ToVisitList.savedArt.location} </h3> 
                <p>I've been here! <input id={savedArt.id}
                type="checkbox"
                //on click of checkbox - change value of visited to true
                /* onClick={() => {
                  const visitedArt = {
                    art: savedArt.title,
                    visited: this.state.visited,
                    userId: 1
                  }
                }} */
                  />
                </p>
              </div>
            )
          }
        </section> 
      </>
    )
  }
}