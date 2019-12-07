import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createArticle, getArticles } from "../store/actions/articlesActions";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const Create = props => {
  const [state, setState] = useState({
    author: "",
    content: "",
    created_at: new Date().toDateString(),
    image: "default-image.jpeg",
    title: "",
    updated_at: ""
  });

  useEffect(() => {
    NProgress.start();
    if (!props.articles.length) {
      props.getArticles();
    }
    NProgress.done(); //eslint-disable-next-line
  }, []);

  const Create = e => {
    e.preventDefault();
    props.createArticle({
      ...state,
      id: props.articles[props.articles.length - 1].id + 1
    });
    props.history.push("/");
  };

  const handleChange = e => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  return (
    <div className="container p-5 Create">
      <form onSubmit={e => Create(e)}>
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
            onChange={handleChange}
            value={state.title}
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
            onChange={handleChange}
            value={state.content}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author Name:</label>
          <input
            className="form-control"
            name="author"
            id="author"
            placeholder="Write your Name here"
            onChange={handleChange}
            value={state.author}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
        <button
          onClick={() => props.history.push("/")}
          type="button"
          className="btn btn-dark"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  articles: state.articles.articles
});

export default connect(mapStateToProps, { createArticle, getArticles })(Create);
