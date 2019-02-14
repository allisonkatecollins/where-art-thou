//connects have visited and to visit
//checkbox functionality
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody } from 'reactstrap'
import "./Lists.css"
export default class MySavedArt extends Component {
  state = {
    complete: false
  }
  
  render() {
    console.log("sessionUser:", this.props.sessionUser)
    return(
      <React.Fragment>
        <Link className="nav-link back" to={"/browse"}>Back to Browse</Link>
        <h2>TO VISIT</h2>
        <section className="artToVisit">
          {
            this.props.savedArt.filter(savedArt =>
              savedArt.visited === false && savedArt.userId === sessionStorage.getItem("User"))
              .map(savedArt => 
                <div className="listCard" key={savedArt.id}>
                  <Card>
                    <CardBody>
                      <Link className="nav-link" to={`/browse/${savedArt.title}`}>{savedArt.title}</Link> 
                        <img className="card-image" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        
                        <Button color="info" size="sm" 
                            //on click of button - change value of visited to false
                            //art item should move to "Have Visited" list
                              onClick={() => {
                                const visitedArt = {
                                  title: savedArt.title,
                                  visited: !this.state.visited,
                                  userId: sessionStorage.getItem("User")
                                }
                                this.props.updateList(savedArt.id, visitedArt)}}>I've been here!
                        </Button>

                        <Button color="warning" size="sm"
                            //on click of button - remove item from "To Visit" list
                              onClick={() => this.props.deleteItem(savedArt.id)}>
                                Remove from List
                        </Button>
                    </CardBody>
                  </Card>
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
                return <div className="listCard" key={savedArt.id}>
                  <Card>           
                    <Link className="to-details-page" to={`/browse/${savedArt.title}`}>{savedArt.title}</Link>
                  </Card>
                </div>
              }}
            )
        } 
        </section>
      </React.Fragment>
    )
  }
}