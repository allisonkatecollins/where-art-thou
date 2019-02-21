import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Login extends Component {
  //setting initial state to undefined for input fields
  state = {
    username: "",
    password: ""
  }

  //record changes to input fields
  //called when each input value is rendered
  //set state
  handleFieldChange = evt => {
    //state starts as undefined
    const stateToChange = {};
    //define input's id as the user-entered value
    stateToChange[evt.target.id] = evt.target.value
    //value of const will be the new state of each input field
    this.setState(stateToChange)
    //console log should show username and password that have just been entered
    console.log("state:", this.state)
  }

  //function to be called in render
  onLogin = (evt) => {
    //prevent URL redirect (?)
    evt.preventDefault();
    //call verifyUser, which is defined in ApplicationViews
    //looks up matching username and password in database.json
    this.props.verifyUser(this.state.username, this.state.password)
    .then(user => {
      //alert message if user doesn't exist within database
      if (user.length === 0) {
        alert("You must be new - please register below!")
      } else { 
        //state of loggedIn (i.e. session storage) is set to false if username/password not found
        user.forEach(uz => {
          let loggedIn = false;
          //if both username and password do exist in database, session storage is set to true
          if (this.state.username === uz.username && this.state.password === uz.password) {
              loggedIn = true;
            }
            if (loggedIn === true) {
              //"User" and current id will be passed when sessionStorage() is called throughout the files
              sessionStorage.setItem("User", uz.id)
              let sessionUser = sessionStorage.getItem("User")
              //sessionUser will be the numerical id as stored in database.json in the users array
              console.log("sessionUser:", sessionUser)
              //user redirected to /home when login button is pushed
              this.props.history.push("/home")
            }
          })
       }
      }) 
  }

  render() {
    //login form with input fields and link to registration page
    return (
      <React.Fragment>
        <h2>LOGIN</h2>
        <div>
          <form>
            <div>
              <label htmlFor="Username">
                Username:
              </label>
                <input type="text" required onChange={this.handleFieldChange}
                       id="username"
                       placeholder="username" />
            </div>
            <div>
              <label htmlFor="Password">
                Password:
              </label>
                <input type="password" required onChange={this.handleFieldChange}
                       id="password"
                       placeholder="password" />
            </div>
            <div>
              <button type="submit" onClick={this.onLogin} >
              LOGIN
              </button>
              <p><Link to="/register">Register Here</Link></p>
            </div>
          </form>
        </div> 
      </React.Fragment>
    )
  }
}