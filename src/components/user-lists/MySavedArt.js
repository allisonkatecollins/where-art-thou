//connects have visited and to visit
//checkbox functionality
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody } from 'reactstrap'
import "./Lists.css"
export default class MySavedArt extends Component {
 /*  state = {
    complete: false
  }
   */
  render() {
    return(
      <React.Fragment>

        <Link className="backBtn" to="/browse">
            <Button color="info">Back to Browse</Button>
        </Link>
          
        <Button className="logoutBtn" color="secondary" onClick={() => {
            sessionStorage.clear()  
            this.props.history.push("/")}}>Log Out</Button>

        <h2>TO VISIT</h2>
        <section className="artToVisit">
          {
            this.props.savedArt.filter(savedArt =>
              //filter savedArt: has not been visited, userId in database.json matches current session user
              savedArt.visited === false && savedArt.userId === sessionStorage.getItem("User"))
              //loop through savedArt array, generate card for each item
              //need to insert SavedArtCard here
              .map(savedArt => 
                <div className="listCard" key={savedArt.id}>
                  <Card>
                    <CardBody className="to-visit">{savedArt.title}
                        <img className="card-image" width="100%" src="/photos/cool-fences.jpg" alt="public art" />
                        
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
          this.props.savedArt.filter(savedArt => 
            //console.log(savedArt)
            savedArt.visited === true && savedArt.userId === sessionStorage.getItem("User"))
              .map(savedArt =>
                <Card className="have-visited" key={savedArt.id}>{savedArt.title}</Card>
                )
              
            /* this.props.savedArt.map(savedArt => {
              //console.log(savedArt)
              if(savedArt.visited === true) {
                return <div className="listCard" key={savedArt.id}>
                  <Card>           
                    <Link className="to-details-page" to={`/browse/${savedArt.title}`}>{savedArt.title}</Link>
                  </Card>
                </div> */
        } 
        </section>
      </React.Fragment>
    )
  }
}