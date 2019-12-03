import React, { Component } from 'react'
    //import the components we will need
    import ArticleCard from './ArticleCard'
    import ArticleManager from '../../Modules/ArticleManager'

    class ArticleList extends Component {
        //define what this component needs to render
        state = {
            articles: [],
        }

    componentDidMount(){
        console.log("ARTICLE LIST: ComponentDidMount");
        //getAll from ArticleManager and hang on to that data; put it in state
        ArticleManager.getAll()
        .then((articles) => {
            this.setState({
                articles: articles
            })
        })
    }

    render(){
        console.log("ArticleList: Render");
      
        return(
          <div className="container-cards">
            {this.state.articles.map(article =>
              <ArticleCard key={article.id} article={article} />
            )}
          </div>
        )
      }
}

export default ArticleList
