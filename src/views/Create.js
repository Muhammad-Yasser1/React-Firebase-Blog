import React, { Component } from "react";
import { connect } from "react-redux";
import { createArticle, getArticles } from "../store/actions/articlesActions";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

export class Create extends Component {
  state = {
    author: "",
    content: "",
    created_at: "",
    image: "default-image.jpeg",
    title: "",
    updated_at: new Date().toDateString()
  };

  componentWillMount() {
    nprogress.start();
  }

  componentDidMount() {
    nprogress.done();
    if (!this.props.articles.length) {
      this.props.getArticles();
    }
  }

  Create = e => {
    e.preventDefault();
    this.props.createArticle({
      ...this.state,
      id: this.props.articles[this.props.articles.length - 1].id + 1
    });
    this.props.history.push("/");
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div className="container p-5 Create">
        <form onSubmit={e => this.Create(e)}>
          <h1 className="mb-3">Create a new Article:</h1>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              aria-describedby="helpId"
              placeholder="Write your article title here"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              className="form-control"
              name="content"
              id="content"
              rows="10"
              placeholder="Write your article content here"
              onChange={this.handleChange}
              value={this.state.content}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author Name:</label>
            <input
              className="form-control"
              name="author"
              id="author"
              placeholder="Write your Name here"
              onChange={this.handleChange}
              value={this.state.author}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
          <button
            onClick={() => this.props.history.push("/")}
            type="button"
            className="btn btn-dark"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles
});

export default connect(
  mapStateToProps,
  { createArticle, getArticles }
)(Create);
