import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArticles } from "../store/actions/articlesActions";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const Blog = props => {
  useEffect(() => {
    NProgress.start();
    if (!props.articles.length) {
      props.getArticles();
    }
    NProgress.done(); //eslint-disable-next-line
  }, [props.articles]);

  const { articles, editMode } = props;
  return (
    <div className="Blog row justify-content-around">
      {articles.map(article => (
        <div
          className="card text-white bg-transparent border-0 col-10 col-sm-8 col-md-6 col-lg-4 p-4"
          key={article.id}
        >
          <NavLink
            to={{
              pathname: !editMode
                ? `/posts/${article.id}`
                : `/posts/${article.id}/edit`
            }}
          >
            <img
              className="card-img-top"
              src={require(`../images/${article.image}`)}
              alt="Article"
            />
            <div className="title">{article.title}</div>
            <div className="overlay"></div>
            <div className="author">
              {article.updated_at || article.created_at}{" "}
              {article.author && `by ${article.author}`}
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  articles: state.articles.articles,
  editMode: state.editMode.editMode
});

export default connect(mapStateToProps, { getArticles })(Blog);
