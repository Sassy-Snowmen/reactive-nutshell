// author: Michelle Johnson
import React, { Component } from "react"
import ArticleManager from "../../Modules/ArticleManager"

class LogIn extends Component {

    // Set initial state
    state = {
        username: "",
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = (e) => {
        e.preventDefault()

        ArticleManager.searchUser(this.state.email)
            .then((existingUser) => {
                if (existingUser.length === 0) {
                    alert("User does not have an account")
                } else {
                    const user = existingUser[0]
                    if (user.password === this.state.password) {
                        this.props.setUser(user)
                        this.props.history.push("/")
                    } else {
                        alert("Incorrect Password, Try Again.")
                    }
                }
            })
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <fieldset>
                    <h3>Login</h3>
                    <div className="formgrid">
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
                    </div>
                    <button type="submit">
                        Log In
            </button>
                </fieldset>
            </form>
        )
    }

}

export default LogIn