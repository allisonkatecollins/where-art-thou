//connects have visited and to visit
//make cards here and call them in have visited / to visit
//checkbox functionality

import React, { Component } from 'react'
//import HaveVisitedList from "./user-lists/have-visited/HaveVisitedList"


export default class MySavedArt extends Component {
  render() {
    return(
      <>
        <section className="artToVisit">
          {
            this.props.savedArt.filter(savedArt =>
              savedArt.visited === false)
              .map(savedArt => 
                <p key={savedArt.id}>{savedArt.title}</p>)
          }
        </section>
        <section className="artHaveVisited">
        {
            this.props.savedArt.filter(savedArt =>
              savedArt.visited === true)
              .map(savedArt => 
                <p key={savedArt.id}>{savedArt.title}</p>)
          }
        </section>
       {/*  <section className="mySavedArt">
          {
            this.props.art.map(savedArt =>
              <div className="savedArtCard" key={savedArt.id}>
                <h2> {savedArt.title} </h2>
                <h3> {savedArt.location} </h3> 
                <p>I've been here! <input id={savedArt.id}
                type="checkbox"
                //on click of checkbox - change value of visited to true
                /* onClick={() => {
                  const visitedArt = {
                    art: savedArt.title,
                    visited: this.state.visited,
                    userId: 1
                  }
                }} 
                  />
                </p>
              </div>
            )
          
        </section>  */}
      </>
    )
  }
}