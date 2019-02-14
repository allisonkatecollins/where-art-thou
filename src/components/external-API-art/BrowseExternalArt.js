import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Browse.css"
import { Button, Card, CardBody, Collapse } from 'reactstrap';

  //need something to make only one detail button expand at a time
  
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
          <h2>BROWSE ALL ART</h2>          
        <section className="allArt">
        {
          this.props.art.map(artItem => 
              <div className="displayCard" key={artItem.title}>
                <Card>
                    <CardBody>
                      <h3>{artItem.title}</h3>
                      <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                      
                        <Button outline color="warning" onClick={() => 
                          this.props.addToList((this.props.userId), (artItem.title))}>Add to List
                        </Button>
                    
                      <Button outline color="info" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Details</Button>
                        <Collapse isOpen={this.state.collapse}>
                          <Card>
                            <CardBody>
                              <p>Artist: {artItem.first_name} {artItem.last_name}</p>
                              <p>{artItem.location}</p>
                              <p>{artItem.medium}</p>
                              <p>{artItem.description}</p>
                            </CardBody>
                          </Card>
                        </Collapse>

                    </CardBody>
                  </Card>
              </div> 
          )
        }
        </section>
      </React.Fragment>
    )
  }
}