import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        if (this.props.user === true) {
            return (
                <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Articles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/friends">Friends</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/messages">Messages</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tasks">Tasks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/events">Events</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item">
                                <span className="nav-link logout" to="/login" onClick={this.props.clearUser}>Log Out</span>
                            </li>
                        </ul>
                    </span>
                </nav>
            )
        } else {
            return (
                <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
                    <span className="navbar-text">
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </ul>
                    </span>
                </nav>
            )
        }

    }
}

export default NavBar
