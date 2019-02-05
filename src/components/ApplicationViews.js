import React, { Component } from "react";
import { Route } from "react-router-dom";
import ExternalArtManager from "../modules/ExternalArtManager";
/* import LoginManager from "../modules/LoginManager";
import PhotoManager from "../modules/PhotoManager";
import SavedArtManager from "../modules/SavedArtManager";
import ArtCards from "./art/ArtCards";
import ArtDetails from "./art/ArtDetails"; */
import ArtList from "./art/ArtList";
/* import Login from "./authentication/Login";
import LoginForm from "./authentication/LoginForm";
import HaveVisitedCards from "./user-lists/have-visited/HaveVisitedCards";
import HaveVisitedDetails from "./user-lists/have-visited/HaveVisitedDetails";
import HaveVisitedList from "./user-lists/have-visited/HaveVisitedList";
import ToVisitCards from "./user-lists/to-visit/ToVisitCards";
import ToVisitDetails from "./user-lists/to-visit/ToVisitDetails";
import ToVisitList from "./user-lists/to-visit/ToVisitList";
import MySavedArt from "./user-lists/MySavedArt" */

export default class ApplicationViews extends Component {
  //set initial state
  state = {
    art: []
  };

  //authentication

  componentDidMount() {
    ExternalArtManager.getAll().then(allArt => {
      this.setState({
        art: allArt
      })
    })
  }

  //add to list function
  //update list function
  //submit rating function

  render() {
    console.log(this.state)
    return(
      <React.Fragment>
        <Route path="/browse" render={(props) => {
          return <ArtList {...props} />
        }} />
      </React.Fragment>
    )
  }
}