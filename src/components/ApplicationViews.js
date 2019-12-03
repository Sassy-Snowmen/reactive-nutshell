import { Route } from "react-router-dom";
import React, { Component } from "react";
<<<<<<< HEAD
import FriendList from "./Friends/FriendList";
import ArticleList from "./Articles/ArticleList";
import TaskCard from "./Tasks/TaskCard"
=======
import TaskCard from "./Tasks/TaskCard"
import FriendList from "./Friends/FriendList";
import ArticleList from "./Articles/ArticleList";

>>>>>>> 6fcff9a8d9c2bbb24fec7c6fc9a2388ab8cac961

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return <ArticleList />
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          exact path="/register" render={props => {
            return null
            // Remove null and return the component which will handle user registration
          }}
        />

        <Route
          path="/friends" render={props => {
            return <FriendList />
            // Remove null and return the component which will show list of friends
          }}
        />
        

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return <TaskCard />
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          path="/events" render={props => {
            return null
            // Remove null and return the component which will show the user's events
          }}
        />

      </React.Fragment>
    );
  }
}
