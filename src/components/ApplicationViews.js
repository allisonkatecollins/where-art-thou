import React, { Component } from "react";
import { Route } from "react-router-dom";
import LoginManager from "../modules/LoginManager";
import Login from "./authentication/Login";
import Registration from "./authentication/Registration";
import LandingPage from "./LandingPage"
import ExternalArtManager from "../modules/ExternalArtManager";
import BrowseExternalArt from "./external-API-art/BrowseExternalArt";
import SavedArtManager from "../modules/SavedArtManager";
import MySavedArt from "./user-lists/MySavedArt" 
import PhotoManager from "../modules/PhotoManager"

export default class ApplicationViews extends Component {
  //set initial state
  state = {
    art: [],
    savedArt: [],
    users: [],
    userId: sessionStorage.getItem("User"),
    photos: "",
    title: []
  };

  
  componentDidMount() {
    ExternalArtManager.getAll().then(allArt => {
      this.setState({
        art: allArt,
        title: allArt.title
      })
    })
    
    SavedArtManager.getAll().then(savedArt => {
      this.setState({
        savedArt: savedArt
      })
    })
    
    //users array will re-render as value assigned to allUsers in Registration.js
    LoginManager.getUsers().then(allUsers => {
      this.setState({
        users: allUsers
      })
    })

    PhotoManager.getAllPhotos().then(artPhoto=> {
     // console.log("artPhoto:",artPhoto)
      this.setState({
        photos: artPhoto
      })
    })
  }
  
  //AUTHENTICATION
  isAuthenticated = () => sessionStorage.getItem("User") !==null

  //LOGIN AND REGISTRATION

  //I don't think commented out code was doing anything
 /*  registerUser(username, password) {
    LoginManager.getUsers(username, password)
  } */

  getUsers = () => {
    return LoginManager.getUsers("users")
  } 

  
  //if it weren't defined here then this.props.postUser in Registration.js would throw an error
  postUser = (newUser) => {
    //postUser in LoginManager does a POST fetch using newUser
    return LoginManager.registerUser(newUser)
      .then(() => LoginManager.getUsers("users"))
  }

  //findUser fetches data from database.json and connects matching username and password
  verifyUser = (username, password) => {
    return LoginManager.findUser(username, password)
  }

  //add to list - button function on /browse
  //postToVisit does a POST fetch in the savedArt array in database.json
  addToList = (userId, title) => SavedArtManager.postToVisit(userId, title)
    .then(() => SavedArtManager.getAll())
    .then(artItems => this.setState({
      savedArt: artItems})
    )

  //update list - button function on /lists
  //editToVisit does a PUT fetch
  updateList = (savedArtId, visitedArt) => {
    return SavedArtManager.editToVisit(savedArtId, visitedArt)
    .then(() => SavedArtManager.getAll())
    .then(allSavedArt => {
      this.setState({
        savedArt: allSavedArt
      })
    })
  }

  //delete from list - button function on /lists
  deleteItem = (id) => {
    return SavedArtManager.deleteItem(id)
      .then(() => SavedArtManager.getAll())
      .then(allSavedArt => {
        this.setState({
        savedArt: allSavedArt
        })
      }) 
  }

  render() {
    console.log("render:", this.state.users)
    return(
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Login {...props} 
          verifyUser={this.verifyUser}
          users={this.state.users} 
          getUsers={this.getUsers}/>
        }} />

        <Route exact path="/register" render={(props) => {
          return <Registration {...props} 
          getUsers={this.getUsers}
          postUser={this.postUser}
          userId={this.state.userId} />
        }} />

        <Route exact path="/home" render={(props) => {
          return <LandingPage {...props} 
          users={this.state.users} />
        }} />

        <Route exact path="/browse" render={(props) => {
          return <BrowseExternalArt {...props} 
          photos={this.state.photos}
          art={this.state.art}
          addToList={this.addToList}
          userId={this.state.userId}  />
        }} />

        <Route exact path="/lists" render={(props) => {
          return <MySavedArt {...props}
          art={this.state.art} 
          savedArt={this.state.savedArt}
          photos={this.state.photos}
          updateList={this.updateList}
          deleteItem={this.deleteItem} 
          userId={this.state.userId}/>
        }} />

      </React.Fragment>
    )
  }
}