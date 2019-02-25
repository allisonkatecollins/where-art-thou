//connects have visited and to visit
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, Col } from 'reactstrap'
import "./Lists.css"
import Logo from "./Logo.png"
import ToVisitCard from './ToVisitCard'
//import HaveVisitedCard from './HaveVisitedCard'
export default class MySavedArt extends Component {
  //do not delete this
  state = {
    visited: false
  }

  getCard = (savedArt) => {
    if (this.props.art.length !== 0) {
      return this.props.art.filter(artObj => artObj.title === savedArt.title).map(artObj =>
        <ToVisitCard key={artObj.title} art={artObj} savedArt={savedArt}/>
      )
    }                       
  }

  
  render() {
    //this.artToVisit()
    console.log("artprops:", this.props.art)
    return(
      <React.Fragment>
        <div>
            <img className="imgStyle" src={Logo} alt="icon"/> 
          </div>

        <Link className="backBtn" to="/browse">
            <Button color="info">Back to Browse</Button>
        </Link>
          
        <Button className="logoutBtn" color="secondary" onClick={() => {
            sessionStorage.clear()  
            this.props.history.push("/")}}>Log Out</Button>

        <h2>TO VISIT</h2>

        <section className="artToVisit"/>
          {
            this.props.savedArt.filter(savedArt =>
              //filter savedArt: has not been visited, userId in database.json matches current session user
              savedArt.visited === false && savedArt.userId === sessionStorage.getItem("User"))
              
                 .map(savedArt => 
                  <Col key={savedArt.id} sm="4">
                  <div className="card" >
                        <Card className="to-visit">

                          <h4>{savedArt.title}</h4>

                          {this.getCard(savedArt)}
                            
                          <Button className="mr-1" color="info" size="sm" 
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
                        <Button color="secondary" size="sm"
                            //on click of button - remove item from "To Visit" list
                              onClick={() => this.props.deleteItem(savedArt.id)}>
                                Remove from List
                        </Button>
                  </Card>
                </div>
                </Col>
              )
          }
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
  }}