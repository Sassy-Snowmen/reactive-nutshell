import { Route } from "react-router-dom";
import React, { Component } from "react";
// import MessageCard from "./Messages/MessageCard";
import MessageList from "./Messages/MessageList";
import EventCard from "./Events/EventCard";
import TaskList from "./Tasks/TaskList"
import TaskForm from "./Tasks/TaskForm"
import FriendList from "./Friends/FriendList";
import ArticleList from "./Articles/ArticleList";
import TaskCard from "./Tasks/TaskCard"
import MessageCard from "./Messages/MessageCard";
import EventList from "./Events/EventList";
import ArticleForm from './Articles/ArticleForm';
import ArticleEditForm from './Articles/ArticleEditForm'
import EventForm from './Events/EventEditForm'

export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/" render={props => {
            return <ArticleList  {...props} />
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
          }}
        />

        <Route
          path="/tasks"
          render={props => {
            return <TaskCard />;

          }}
        />

        <Route
          path="/events" render={props => {
            return < EventList />
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
