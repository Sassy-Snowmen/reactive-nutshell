import { Route } from "react-router-dom";
import React, { Component } from "react";
import FriendList from "./Friends/FriendList";
import ArticleList from "./Articles/ArticleList";
import TaskCard from "./Tasks/TaskCard";
import MessageCard from "./Messages/MessageCard";
import ArticleForm from "./Articles/ArticleForm";
import EventList from "./Events/EventList";

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

        <Route
          path="/articles/new"
          render={props => {
            return <ArticleForm {...props} />;
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
          path="/messages"
          render={props => {
            return <MessageCard />;
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks"
          render={props => {
            return <TaskCard />;
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          path="/events"
          render={props => {
            return <EventList />;
            // Remove null and return the component which will show the user's events
          }}
        />

        <Route
          path="/events/new"
          render={props => {
            return <EventForm {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}
