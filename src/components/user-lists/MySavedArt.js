//connects have visited and to visit
//checkbox functionality
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                  <button type="submit"
                          id="updateButton"
                  //on click of button - change value of visited to false
                  //art item should move to "Have Visited" list
                    onClick={() => {
                      const visitedArt = {
                        title: savedArt.title,
                        visited: !this.state.visited,
                        userId: 1
                      }
                      this.props.updateList(savedArt.id, visitedArt)}}>I've been here!</button>
                  <button type ="submit"
                          id="deleteButton"
                  //on click of button - remove item from "To Visit" list
                    onClick={() => this.props.deleteItem(savedArt.id)}>
                      Remove from List
                    </button>
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
        } 
        </section>
        <Link className="nav-link back" to={"/browse"}>Back to Browse</Link>
      </React.Fragment>
    )
  }
}