import React, { Component } from "react"
import ArticleManager from "../../Modules/ArticleManager"

class Register extends Component {

    // Set initial state
    state = {
        username: "",
        email: "",
        password: "",
        loadingStatus: false,
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    handleRegistration = (e) => {
        e.preventDefault()
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
                </fieldset>
            </form>
        )
    }
}



export default Register