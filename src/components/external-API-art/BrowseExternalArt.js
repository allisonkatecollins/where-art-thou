import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import "./Browse.css"
import { Button } from 'reactstrap';
import ExternalArtCard from './ExternalArtCard';

  
export default class BrowseExternalArt extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

    render() {
      return(
        <React.Fragment>

          <Link className="backBtn" to="/lists">
            <Button color="info">Back to Saved Art</Button>
          </Link>
          <Button className="logoutBtn" color="secondary" onClick={() => {
            sessionStorage.clear()  
            this.props.history.push("/")}}>Log Out</Button>

          <h2>BROWSE ALL ART</h2>

        <section className="allArt">
        {
          this.props.art.map(art => 
            <ExternalArtCard key={art.title} art={art}/>
            
           
             /*  <div className="displayCard" key={artItem.title}>
                <Card>
                    <CardBody  className="card-body">
                      <h3>{artItem.title}</h3>
                      <img className="browse-image" width="100%" src="/photos/12th-and-porter.jpg" alt="public art" />
                      
                      <ListGroupItem id={`${artItem.title}`}>
                        <Button outline color="warning" onClick={() => 
                          this.props.addToList((this.props.userId), (artItem.title))}>Add to List
                        </Button>
                    
                      <Button id={`${artItem.title}`} outline color="info" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Details</Button>
                        <Collapse isOpen={this.state.collapse}>
                          <Card className="details-card">
                            <CardBody className="details-expand">
                              <p>Artist: {artItem.first_name} {artItem.last_name}</p>
                              <p>{artItem.location}</p>
                              <p>{artItem.medium}</p>
                              <p>{artItem.description}</p>
                            </CardBody>
                          </Card>
                        </Collapse>
                        </ListGroupItem>

                    </CardBody>
                  </Card>
              </div>  */
          )
        }
        </section>
      </React.Fragment>
    )
  }
}