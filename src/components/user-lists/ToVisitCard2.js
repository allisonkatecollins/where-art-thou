import React, { Component } from 'react'
import "./Lists.css"
import { Card, CardBody } from 'reactstrap';
import ExternalArtManager from "./../../modules/ExternalArtManager"

export default class ToVisitCard2 extends Component {
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
   this.setState({
     artToVisit: artItem
   }) 
  }

    render() {
      let art = this.props.art
      let artItem = this.state.artToVisit

      console.log("art title", this.props.art.title)
      console.log("artItem", artItem)
 
      return(

        <Card className="toVisitCard">
          <CardBody className="card-body">
                  <CardBody>
                    <p>Artist: {art.first_name} {art.last_name}</p>
                    <p>{art.location}</p>
                    <p>{art.type}</p>
                    <p>{art.medium}</p>
                    <p>{art.description}</p>
                  </CardBody>

          </CardBody>
        </Card>
      ) */
//    }
}