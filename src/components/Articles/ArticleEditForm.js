import React, { Component } from "react"
import ArticleManager from "../../Modules/ArticleManager"
import "./ArticleForm.css"

class ArticleEditForm extends Component {
    //set the initial state
    state = {
        title: "",
        synopsis: "",
        url: "",
        timestamp: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingArticle = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const user = localStorage.getItem("credentials")
        const userId = parseInt(user)
        const editedArticle = {
            id: this.props.match.params.articleId,
            title: this.state.title,
            synopsis: this.state.synopsis,
            timestamp: this.state.timestamp,
            url: this.state.url,
            userId: userId
        };

        ArticleManager.update(editedArticle)
            .then(() => this.props.history.push("/"))
    }

    componentDidMount() {
        ArticleManager.get(this.props.match.params.articleId)
            .then(article => {
                this.setState({
                    title: article.title,
                    synopsis: article.synopsis,
                    url: article.url,
                    timestamp: article.timestamp,
                    loadingStatus: false,
                });
            });
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="title"
                                value={this.state.title}
                            />
                            <label htmlFor="title">Title </label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="synopsis"
                                value={this.state.synopsis}
                            />
                            <label htmlFor="synopsis">Synopsis</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="url"
                                value={this.state.url}
                            />
                            <label htmlFor="url">Url</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingArticle}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default ArticleEditForm