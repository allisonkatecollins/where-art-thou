//connects have visited and to visit
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'reactstrap'
import "./Lists.css"
import ToVisitCard from './ToVisitCard'
//import HaveVisitedCard from './HaveVisitedCard'
export default class MySavedArt extends Component {
  //do not delete this
  state = {
    visited: false
  }
  
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
                <div className="card" key={savedArt.id}>
                    <Card className="to-visit">
                      {/* <CardBody> */}
                      <ToVisitCard photos={this.props.photos} savedArt={savedArt} art={this.props.art}/>
                        
                      <Button className="mr-1" color="info" size="sm" 
                      //on click of button - change value of visited to false
                      //art item should move to "Have Visited" list
                      onClick={() => {
                        const visitedArt = {
                        title: this.props.savedArt.title,
                        visited: !this.state.visited,
                        userId: sessionStorage.getItem("User")
                        }
                        this.props.updateList(this.props.savedArt.id, visitedArt)}}>I've been here!
                    </Button>

                    <Button color="warning" size="sm"
                      //on click of button - remove item from "To Visit" list
                      onClick={() => this.props.deleteItem(this.props.savedArt.id)}>
                      Remove from List
                    </Button>
                   {/*  </CardBody> */}
                    </Card>
                </div>
              )
          }
        </section>
        <section className="artHaveVisited">
        <h2>HAVE VISITED</h2>
        {
          this.props.savedArt.filter(savedArt => 
            //filter savedArt: boolean=true, userId in database.json matches current session user
            savedArt.visited === true && savedArt.userId === sessionStorage.getItem("User"))
              .map(savedArt =>
                //add HaveVisitedCard here

                <Card className="have-visited" key={savedArt.id}>{savedArt.title}</Card>
              )
              
           
        }
        </section>
      </React.Fragment>
    )
  }
}