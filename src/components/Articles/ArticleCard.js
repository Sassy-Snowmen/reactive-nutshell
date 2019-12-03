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
        </div>
      </div>
    );
  }
}

export default ArticleCard;