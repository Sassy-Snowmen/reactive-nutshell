import React, { Component } from 'react';
import ArticleManager from '../../Modules/ArticleManager';
import './ArticleForm.css'

class ArticleForm extends Component {
    state = {
        title: "",
        synopsis: "",
        url:"",
        loadingStatus: false,
        timestamp: "",
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewArticle = evt => {
        evt.preventDefault();
        if (this.state.title === "" || this.state.synopsis === "" || this.state.url === "") {
            window.alert("Please input an article title, synopsis and Url");
        } else {
            this.setState({ loadingStatus: true });
            const article = {
                title: this.state.title,
                synopsis: this.state.synopsis,
                url: this.state.url,
                userId: 1,
                timestamp: new Date().toISOString()
            };
            ArticleManager.post(article)
            .then(() => this.props.history.push("/"));
        }

    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input type="text" required onChange={this.handleFieldChange} id="title" placeholder="Article name"/>
                        <label htmlFor="articleTitle">Title</label>
                        <input type="text" required onChange={this.handleFieldChange} id="synopsis"
                        placeholder="Synopsis"
                        />
                        <label htmlFor="synopsis">Synopsis</label>
                        <input type="text" required onChange={this.handleFieldChange} id="url"
                        placeholder="Url"
                        />
                        <label htmlFor="url">Url</label>
                    </div>
                    <div className="alignRight">
                        <button type="button" disabled={this.state.loadingStatus} onClick={this.constructNewArticle}>Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default ArticleForm