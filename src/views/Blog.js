import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArticles } from "../store/actions/articlesActions";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
export class Blog extends Component {
  componentWillMount() {
    nprogress.start();
  }

  componentDidMount() {
    nprogress.done();
    if (!this.props.articles.length) {
      this.props.getArticles();
    }
  }
  navToArticle = article => {
    if (!this.props.editMode) {
      this.props.history.push(`/${article.id}`);
    } else {
      this.props.history.push(`/${article.id}/edit`);
    }
  };

  render() {
    const { articles, editMode } = this.props;
    return (
      <div className="Blog row justify-content-around">
        {articles.map(article => (
          <div
            className="card text-white bg-transparent border-0 col-10 col-sm-8 col-md-6 col-lg-4 p-4"
            key={article.id}
          >
            <NavLink
              to={{
                pathname: !editMode ? `/${article.id}` : `/${article.id}/edit`
              }}
              style={{ position: "relative" }}
            >
              <img
                className="card-img-top"
                src={require(`../images/${article.image}`)}
                alt="Article Pic"
              />
              <div className="title">{article.title}</div>
              <div className="overlay" />
              <div className="author">
                {article.updated_at} by {article.author}
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles,
  editMode: state.editMode.editMode
});

export default connect(
  mapStateToProps,
  { getArticles }
)(Blog);
