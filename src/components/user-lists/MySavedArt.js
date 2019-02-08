//connects have visited and to visit
//checkbox functionality
import React, { Component } from 'react'
export default class MySavedArt extends Component {
  state = {
    complete: false
  }
  
  render() {
    return(
      <React.Fragment>
        <section className="artToVisit">
        <h2>TO VISIT</h2>
          {
            this.props.savedArt.filter(savedArt =>
              savedArt.visited === false)
              .map(savedArt => 
                <div key={savedArt.id}>
                  <p>{savedArt.title}</p>
                  <button type ="submit"
                    //on click of checkbox - change value of visited to false
                    //art item should move to have visited list
                    onClick={() => {
                      const visitedArt = {
                        title: savedArt.title,
                        visited: !this.state.visited,
                        userId: 1
                      }
                      this.props.updateList(savedArt.id, visitedArt)}}>I've been here!</button>
                </div>
              )
          }
        </section>
        <section className="artHaveVisited">
        <h2>HAVE VISITED</h2>
        {
            this.props.savedArt.map(savedArt => {
              console.log(savedArt)
              if(savedArt.visited === true) {
                return <div key={savedArt.id}>
                <p>{savedArt.title}</p>
                </div>
              }}
            )
            
            
            /* filter(savedArt =>
              savedArt.visited === true)
              .map(savedArt => 
                <div key={savedArt.id}>
                <p>{savedArt.title}</p>
              </div>
              ) */
        } 
        </section>
      </React.Fragment>
    )
  }
}