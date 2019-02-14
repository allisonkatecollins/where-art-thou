//connects have visited and to visit
//checkbox functionality
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, Collapse } from 'reactstrap'
import "./Lists.css"
/* import ExternalArtManager from "./../../modules/ExternalArtManager"
 */export default class MySavedArt extends Component {
  /* state = {
    art: []
  }

  componentDidMount() {
    ExternalArtManager.getAll().then(artDisplay => {
      console.log("artDisplay",artDisplay)
      this.setState({
        art: artDisplay
      })
    })
  } */

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  render() {
    console.log("art state",this.state.art)
    console.log("sessionUser:", this.props.sessionUser)
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
              savedArt.visited === false && savedArt.userId === sessionStorage.getItem("User"))
              .map(savedArt => 
                <div className="listCard" key={savedArt.id}>
                <Card>
                   {/*  <CardBody  className="card-body">
                      <img className="browse-image" width="100%" src="/photos/a-splash-of-color.jpg" alt="public art" />
                       */}
                     {/*  {this.state.art !== undefined ? this.state.art.find(art =>
                      <>
                        <Button outline color="info" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{savedArt.title}</Button>
                          <Collapse isOpen={this.state.collapse}>
                            <Card className="details-card">
                              <CardBody className="details-expand">
                               <p>Artist: {art.first_name} {art.last_name}</p>
                                <p>{art.location}</p>
                                <p>{art.medium}</p>
                                <p>{art.description}</p> 
                              </CardBody>
                            </Card>
                          </Collapse>
                      </>
                      ) : ""} */}


  <CardBody className="card-body">
    <Link className="nav-link" to={`/browse/${savedArt.title}`}>{savedArt.title}</Link> 
      <img className="card-image" width="100%" src="/photos/a-splash-of-color.jpg" alt="public art" />
      
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