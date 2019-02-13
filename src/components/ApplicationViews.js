import React, { Component } from "react";
import { Route } from "react-router-dom";
import LoginManager from "../modules/LoginManager";
import Login from "./authentication/Login";
import Registration from "./authentication/Registration";
import LandingPage from "./LandingPage"
import ExternalArtManager from "../modules/ExternalArtManager";
import BrowseExternalArt from "./external-API-art/BrowseExternalArt";
import ExternalArtDetails from "./external-API-art/ExternalArtDetails"
import SavedArtManager from "../modules/SavedArtManager";
import MySavedArt from "./user-lists/MySavedArt" 
//import PhotoManager from "../modules/PhotoManager";

export default class ApplicationViews extends Component {
  //set initial state
  state = {
    art: [],
    savedArt: [],
    users: [],
    userId: sessionStorage.getItem("User")
  };

  
  componentDidMount() {
    ExternalArtManager.getAll().then(allArt => {
      this.setState({
        art: allArt
      })
    })
    
    SavedArtManager.getAll().then(savedArt => {
      this.setState({
        savedArt: savedArt
      })
    })
    
    LoginManager.getUsers().then(allUsers => {
      this.setState({
        users: allUsers
      })
      console.log("componentDidMount:", this.state.users)
    })
  }
  
  //authentication
  isAuthenticated = () => sessionStorage.getItem("User") !==null

  //login and registration
  registerUser(username, password) {
    LoginManager.getUsers(username, password)
  }
  getUsers = () => {
    return LoginManager.getUsers("users")
  } 
  postUser = (newUser) => {
    return LoginManager.postUser(newUser)
      .then(() => LoginManager.getUsers("users"))
  }
  verifyUser = (username, password) => {
    return LoginManager.findUser(username, password)
  }

  //add to list - button function on /browse and on /externalArtDetails
  addToList = (userId, title) => SavedArtManager.postToVisit(userId, title)
    .then(() => SavedArtManager.getAll())
    .then(artItems => this.setState({
      savedArt: artItems})
    )

  //update list - button function on /lists
  updateList = (savedArtId, visitedArt) => {
    return SavedArtManager.editToVisit(savedArtId, visitedArt)
    .then(() => SavedArtManager.getAll())
    .then(allSavedArt => {
      let haveVisited = allSavedArt.filter(savedArt => {
        return savedArt.visited === true
      })
      this.setState({
        savedArt: haveVisited
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
          art={this.state.art}
          addToList={this.addToList}
          userId={this.state.userId}  />
        }} />

        <Route exact path="/browse/:title" render={(props) => {
          return( <ExternalArtDetails {...props}
          art={this.state.art}
          addToList={this.addToList} />)
        }} />

        <Route exact path="/lists" render={(props) => {
          return <MySavedArt {...props}
          art={this.state.art} 
          savedArt={this.state.savedArt}
          updateList={this.updateList}
          deleteItem={this.deleteItem} 
          userId={this.state.userId}/>
        }} />

      </React.Fragment>
    )
  }
}