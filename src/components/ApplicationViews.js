import { Route } from "react-router-dom";
import React, { Component } from "react";
import MessageCard from "./Messages/MessageCard";
import EventCard from "./Events/EventCard";
import TaskList from "./Tasks/TaskList"
import TaskForm from "./Tasks/TaskForm"
import TaskEditForm from "./Tasks/TaskEditForm"
import FriendList from "./Friends/FriendList";
import ArticleList from "./Articles/ArticleList";
import ArticleForm from './Articles/ArticleForm'




export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return <ArticleList {...props} />
            // Remove null and return the component which will show news articles
          }}
        />

        <Route path="/articles/new" render={(props) => {
          return <ArticleForm {...props} />
        }} />

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
            return <MessageCard />
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          exact path="/tasks" render={props => {
            return <TaskList {...props} />
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          path="/task/new" render={(props) => {

            return <TaskForm {...props} />
          }}
        />

        <Route
          path="/tasks/:taskId(\d+)/edit" render={props => {
            return <TaskEditForm {...props} />
          }}
        />

        <Route
          path="/events" render={props => {
            return < EventCard />
            // Remove null and return the component which will show the user's events
          }}
        />



      </React.Fragment>
    );
  }
}
