// author: Michelle Johnson
import React, { Component } from "react"
import ArticleManager from "../../Modules/ArticleManager"
import { Link } from "react-router-dom"


class Register extends Component {

    // Set initial state
    state = {
        username: "",
        email: "",
        password: "",
        loadingStatus: false,
        confirmPassword: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    handleRegistration = (e) => {
        e.preventDefault()
        if (this.state.password === '') {
            alert("Please enter Password");
        }
        // If confirm password not entered 
        else if (this.state.confirmPassword === '') {
            alert("Please enter confirm password");
        }
        // If Not same return False.     
        else if (this.state.password !== this.state.confirmPassword) {
            alert("Password did not match: Please try again...")
            return false;
        } else {
            ArticleManager.searchUser(this.state.email)
                .then((existingUser) => {
                    if (existingUser.length === 0) {
                        this.setState({ loadingStatus: true })
                        const userObj = {
                            username: this.state.username,
                            email: this.state.email,
                            password: this.state.password,
                        }
                        ArticleManager.postNewUser(userObj)
                            .then(newUser => {
                                ArticleManager.getRegisteredUser(this.state.email)
                                    .then(users => {
                                        console.log("usrs",users)
                                        users.forEach(user => {
                                            this.props.setUser(user)
                                            
                                        });
                                        this.props.history.push("/")
                                    })
                            })
                    } else {
                        window.alert("User already has an account")
                    }
                }
                )
        }
    }
   

    render() {
        return (
            <>
            <br/>
            <center><h1>Welcome to Reactive Nutshell!!!</h1></center>
            <form onSubmit={this.handleRegistration}>
                <fieldset>
                    <h3>Register Account</h3>
                    <div className="formgrid">
                        <input onChange={this.handleFieldChange} type="text"
                            id="username"
                            placeholder="User Name"
                            required="" autoFocus="" />
                        <label htmlFor="inputEmail">User Name</label>

                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email address"
                            required="" autoFocus="" />
                        <label htmlFor="inputEmail">Email address</label>

                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <label htmlFor="inputPassword">Password</label>

                        <input onChange={this.handleFieldChange} type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            required="" />
                        <label htmlFor="inputPassword">Confirm Password</label>
                    </div>
                    <button type="submit">
                        Register
                    </button>
                    <Link className="nav-link" to="/Login">Already Have An Account</Link>
                </fieldset>
            </form>
            </>
        )
    }
}

    export default Register