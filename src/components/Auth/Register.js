// author: Michelle Johnson
import React, { Component } from "react"
import ArticleManager from "../../Modules/ArticleManager"

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
        if (this.state.password == '') {
            alert("Please enter Password");
        }
        // If confirm password not entered 
        else if (this.state.confirmPassword == '') {
            alert("Please enter confirm password");
        }
        // If Not same return False.     
        else if (this.state.password != this.state.confirmPassword) {
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
                                    .then(user => {
                                        this.props.setUser(user)
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
    // searchUsers = (e) => {
    //     return ArticleManager.searchUser(this.state.email)
    //         .then((existingUser) => {

    //         })

    handleLogin = (e) => {
        e.preventDefault()
        this.searchUsers()

    }

    render() {
        return (
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
                    {/* <br />
                    <br />
                    <div>Already have an account</div> */}
                </fieldset>
            </form>
        )
    }
}

    // checkPassword = function checkPassword(form) {
    //     password = password.value;
    //     confirmPasswork = confirmPassword.value;

    //     // If password not entered 
    //     if (password == '') {
    //         alert("Please enter Password");
    //     }
    //     // If confirm password not entered 
    //     else if (confirmPassword == '') {
    //         alert("Please enter confirm password");
    //     }
    //     // If Not same return False.     
    //     else if (password != confirmPassword) {
    //         alert("Password did not match: Please try again...")
    //         return false;
    //     }

    //     // If same return True. 
    //     else {
    //         alert("Password Match: Welcome to Nutshell!")
    //         return true;
    //     }
    // }



    export default Register