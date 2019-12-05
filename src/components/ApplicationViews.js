import { Route } from "react-router-dom";
import React, { Component } from "react";
// import MessageCard from "./Messages/MessageCard";
import MessageList from "./Messages/MessageList";
import EventCard from "./Events/EventCard";
import TaskList from "./Tasks/TaskList"
import TaskForm from "./Tasks/TaskForm"
import TaskEditForm from "./Tasks/TaskEditForm"
import FriendList from "./Friends/FriendList";
import ArticleList from "./Articles/ArticleList";
import Register from './Auth/Register'
import MessageCard from "./Messages/MessageCard";
import EventList from "./Events/EventList";
import ArticleForm from "./Articles/ArticleForm";
import ArticleEditForm from "./Articles/ArticleEditForm";
import EventForm from "./Events/EventForm";
import EventEditForm from "./Events/EventEditForm"


export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <ArticleList {...props} />;
            // Remove null and return the component which will show news articles
          }}
        />


        <Route path="/articles/new" render={(props) => {
          return <ArticleForm {...props} />
        }} />

        <Route path="/articles/:articleId(\d+)/edit" render={props => {
          return <ArticleEditForm {...props} />
        }}
        />

        <Route
          exact
          path="/register"
          render={props => {
            return null;
            // Remove null and return the component which will handle user registration
          }}
        />

        <Route
          path="/friends"
          render={props => {
            return <FriendList />;
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return <MessageList {...props}/>
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          exact path="/tasks" render={props => {
            return <TaskList {...props} />
        
          }}
        />

        <Route
          exact
          path="/events"
          render={props => {
            return <EventList {...props} />;
          }}
        />

        <Route
          path="/tasks/:taskId(\d+)/edit" render={props => {
            return <TaskEditForm {...props} />
          }}
        />


        <Route
          path="/events/new"
          render={props => {
            return <EventForm {...props} />;
          }}
        />

        <Route
          path="/events/:eventId(\d+)/edit"
          render={props => {
            return <EventEditForm {...props} />;
          }}
        />

        <Route
          path="/register" render={props => {
            return <Register setUser={this.props.setUser} {...props}{...this.props}/>
          }}
        />

      </React.Fragment>
    );
  }
}
