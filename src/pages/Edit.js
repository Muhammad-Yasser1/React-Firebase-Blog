import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  updateArticle,
  getArticles,
  deleteArticle
} from "../store/actions/articlesActions";

const Edit = props => {
  const [article, setArticle] = useState({
    author: "",
    content: "",
    created_at: "",
    image: "default-image.jpeg",
    title: "",
    updated_at: new Date().toDateString()
  });

  useEffect(() => {
    if (!props.match.params.id) {
      return props.history.push("/");
    }
    if (!props.articles.length) {
      props.getArticles();
    } else {
      const checkIfArticleExists =
        props.articles.findIndex(
          article => article.id === +props.match.params.id
        ) < 0;
      if (checkIfArticleExists || !props.editMode) {
        return props.history.push("/");
      }
    }
    const { author, content, created_at, updated_at, title, image } =
      props.articles.find(article => article.id === +props.match.params.id) ||
      {};
    setArticle({
      author,
      content,
      created_at,
      updated_at,
      image,
      title
    });
    //eslint-disable-next-line
  }, [props.articles, props.match.params.id, props.editMode]);

  const EditArticle = e => {
    e.preventDefault();
    props.updateArticle({
      ...article,
      id: +props.match.params.id
    });
    props.history.push("/");
  };

  const deleteArticle = e => {
    e.preventDefault();
    props.deleteArticle(props.match.params.id);
    props.history.push("/");
  };

  const handleChange = e => {
    setArticle({ ...article, [e.target.id]: e.target.value });
  };

  return (
    <div className="container p-5 Create">
      {article.title && (
        <form>
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
              onChange={handleChange}
              value={article.title}
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
              value={article.content}
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
              value={article.author}
            />
          </div>
          <button
            type="button"
            className="btn btn-warning"
            onClick={EditArticle}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={deleteArticle}
          >
            Delete
          </button>
          <button
            onClick={() => props.history.push("/")}
            type="button"
            className="btn btn-dark"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  articles: state.articles.articles,
  editMode: state.editMode.editMode
});

export default connect(mapStateToProps, {
  updateArticle,
  getArticles,
  deleteArticle
})(Edit);
