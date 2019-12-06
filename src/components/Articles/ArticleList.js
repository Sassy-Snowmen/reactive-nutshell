// author: Michelle Johnson
import React, { Component } from 'react'
import ArticleCard from './ArticleCard'
import ArticleManager from '../../Modules/ArticleManager'
import './ArticleForm.css'

class ArticleList extends Component {
  //define what this component needs to render
  state = {
    articles: [],
  }

  componentDidMount() {
    console.log("ARTICLE LIST: ComponentDidMount");
    //getAll from ArticleManager and hang on to that data; put it in state
    ArticleManager.getAll()
      .then((articles) => {
        this.setState({
          articles: articles
        })
      })
  }

  render() {
    console.log("ArticleList: Render");

    return (
      <>
        <br/>
        <center><strong></strong><em><h1>Articles</h1></em><strong></strong></center>
        <section className="section-content">
          <button type="button" className="btn" onClick={() => {this.props.history.push("/articles/new") }}>
            Add Article
          </button>
        </section>
        <div className="container-cards">
          {this.state.articles.map(article =>
            <ArticleCard
              key={article.id}
              article={article}
              deleteArticle={this.deleteArticle}
              {...this.props}
            />
          )}
        </div>
      </>
        )
  }

  deleteArticle = id => {
    ArticleManager.delete(id)
      .then(() => {
        ArticleManager.getAll()
          .then((newArticles) => {
            this.setState({
              articles: newArticles
            })
          })
      })
  }
}

export default ArticleList
