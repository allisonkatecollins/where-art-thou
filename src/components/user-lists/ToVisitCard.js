import React, { Component } from 'react'
import "./Lists.css"
import { Button, Card, CardBody, Collapse } from 'reactstrap';
//import ExternalArtManager from "./../../modules/ExternalArtManager"
export default class ToVisitCard extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, 
                   artToVisit: [] };

  }
/* 
  componentDidMount() {
    let artItem = this.props.art.find(artItem => {
      console.log("arttovisit:", artItem)
      return (artItem.title === this.props.savedArt.title)
    })

    ExternalArtManager.getOne(artItem.title).then(artItem => {
      this.setState({
        artToVisit: artItem
      })
      //console.log(this.state.art[0].description)
    })
  /*  this.setState({
     artToVisit: artItem
   }) */


    toggle(event) {
      this.setState({ collapse: !this.state.collapse });

      let buttonValue = event.target.getAttribute('value');

    /*   let artItem = this.props.art.find(artItem => {
        //console.log("arttovisit:", artItem)
        return (artItem.title === buttonValue)
      })
      this.setState({
        artToVisit: artItem}) */
    }

    render() {
      let art = this.props.art
      let artItem = this.state.artToVisit
      //let savedArt = this.props.savedArt
      //let photos = this.props.photos
      console.log("art title", this.props.art)
      //console.log(this.state, "STATE")
     // console.log("artItem", artItem)
      //console.log("savedArt:", savedArt)
 
      return(

        <Card className="toVisitCard">
          <CardBody className="card-body">
         {/*    <h4>{art.title}</h4> */}
            
           {/*  {photos.map(savedPhoto => 
           //title from API must exactly match title in database.json in order for jpgLink to be accessed
            {
              if (savedArt.title === savedPhoto.title) {
              return <img key={savedPhoto.title} className="browse-image" width="100%" src={savedPhoto.jpgLink} alt="public art" />
            }}
            )} */}
              
            <Button value={this.props.art.title} outline color="info" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Details</Button>
              <Collapse isOpen={this.state.collapse}>
                  <CardBody className="details-expand">
                    <p>Artist: {art.first_name} {art.last_name}</p>
                    <p>{art.location}</p>
                    <p>{art.type}</p>
                    <p>{art.medium}</p>
                    <p>{art.description}</p>
                  </CardBody>
              </Collapse>           

            
          </CardBody>
        </Card>
      )
    }
}