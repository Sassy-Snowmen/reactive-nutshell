// author: Michelle Johnson
import React, { Component } from 'react';

class ArticleCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
          </picture>
          <h3>Title: <span className="card-articlename">{this.props.article.title}</span></h3>
          <p>Synopis: {this.props.article.synopsis}</p>
          <p>Url: {this.props.article.url}</p>
          <button type="button" onClick={() => {this.props.history.push(`/articles/${this.props.article.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteArticle(this.props.article.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default ArticleCard;