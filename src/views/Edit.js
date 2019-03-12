import React, { Component } from "react";
import { connect } from "react-redux";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import {
  updateArticle,
  getArticles,
  deleteArticle
} from "../store/actions/articlesActions";
export class Edit extends Component {
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
    if (this.props.articles[0]) {
      const targetArticle = this.props.articles.find(
        article => article.id == this.props.match.params.id
      );
      this.setState({
        author: targetArticle.author,
        content: targetArticle.content,
        createt_at: targetArticle.createt_at,
        title: targetArticle.title
      });
    }
  }

  Edit = e => {
    e.preventDefault();
    this.props.updateArticle({
      ...this.state,
      id: this.props.match.params.id
    });
    this.props.history.push("/");
  };
  deleteArticle = e => {
    e.preventDefault();
    this.props.deleteArticle(this.props.match.params.id);
    this.props.history.push("/");
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    if (!this.props.articles[0]) {
      this.props.history.push("/");
      return null;
    }
    return (
      <div className="container p-5 Create">
        <form onSubmit={e => this.Edit(e)}>
          <h1 className="mb-3">Edit this Article:</h1>
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
          <button type="butto" className="btn btn-warning">
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.deleteArticle}
          >
            Delete
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
  { updateArticle, getArticles, deleteArticle }
)(Edit);
