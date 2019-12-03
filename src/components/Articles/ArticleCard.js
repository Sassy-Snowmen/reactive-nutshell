import React, { Component } from 'react';

class ArticleCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
          </picture>
          <h3>Title: <span className="card-articlename">Article</span></h3>
          <p>Synopis: summary</p>
          <p>Url: Poodle</p>
        </div>
      </div>
    );
  }
}

export default ArticleCard;