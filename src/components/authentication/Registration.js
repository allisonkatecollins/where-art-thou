import React, { Component } from "react"

export default class Registration extends Component {
  //set initial state as undefined
  state ={
    name: "",
    username: "",
    password: ""
  }

  //same as in Login.js
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  //defining new function here that won't be used outside this component
  getAllUsers = evt => {
    evt.preventDefault();
    //getUsers is defined in LoginManager; is a fetch to return everything in users array in database.json
    this.props.getUsers().then(allUsers => {
      //iterate over array and apply expression in return to every element in array
      let usersArray = allUsers.filter(user => {
        //console log: each already existing username, new username
        console.log("registration:", user.username, this.state.username)
        //establishes new username as being in database.json
        return (user.username === this.state.username)
      })
      
      //logs state of user if already exists in database.json
      //if user is new, logs empty array
      console.log("usersArray:", usersArray)

      if (usersArray.length > 0) {
        alert("This username is taken, try again please!")
      } else {
        alert(`Welcome, ${this.state.name}!`)
        const newUser = {
          name: this.state.name,
          username: this.state.username,
          password: this.state.password
        }
        //after redirect to /login, logs name, username, and password of new user
        console.log("newUser:", newUser)

        //postUser is defined in ApplicationViews
        //postUser calls registerUser, which is the POST fetch
        //so we are posting the new user then calling the updated database
        this.props.postUser(newUser)
          .then(() => {
            this.props.getUsers()
              .then(() => {
                this.props.history.push("/")
              })
          })
      }
    })
  }

  //registration form; getAllUsers() is activated when submit button is pushed
  render() {
    return (
      <React.Fragment>
        <h2>REGISTER</h2>
          <div>
            <form>
              <div>
                <label htmlFor="Name"> Name: </label>
                <input type="text" required onChange={this.handleFieldChange} id="name" placeholder="Name" />
              </div>
              <div>
                <label htmlFor="Username"> Username: </label>
                <input type="text" required onChange={this.handleFieldChange} id="username" placeholder="Username" />
              </div>
              <div>
                <label htmlFor="Password"> Password: </label>
                <input type="password" required onChange={this.handleFieldChange} id="password" placeholder="Password"/>
              </div>
              <div>
                <button type="submit" onClick={this.getAllUsers}>SUBMIT</button>
              </div>
            </form>
          </div>
      </React.Fragment>
    )
  }
}