import React, { Component } from "react";
import { connect } from "react-redux";
import { getArticles } from "../store/actions/articlesActions";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
export class FullArticle extends Component {
  componentWillMount() {
    nprogress.start();
  }

  componentDidMount() {
    nprogress.done();
  }
  render() {
    if (!this.props.articles[0]) {
      this.props.history.push("/");
      return null;
    }
    const article = this.props.articles.find(article => {
      return article.id == this.props.match.params.id;
    });

    return (
      <div className="Article row p-4">
        <div className="col-lg-4 col-md-6 col-9 mx-auto">
          <img
            className="img-fluid"
            src={require(`../images/${article.image}`)}
            alt="Article image"
          />
        </div>
        <div className="col-11 col-md-6 col-lg-8 mx-auto my-3 my-lg-0">
          <h1 className="title">{article.title}</h1>
          <div className="my-3 mb-4">
            <h6>
              by {article.author} -- {article.updated_at}
            </h6>
          </div>
          <hr />
          <div className="card bg-transparent border-0">
            <div className="card-body">
              <blockquote className="blockquote">
                <p>{article.content}</p>
              </blockquote>
            </div>
          </div>
          <p>{article.content}</p>
          <p>{article.content}</p>
          <p>{article.content}</p>
          <p>{article.content}</p>
          <p>{article.content}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles
});

export default connect(
  mapStateToProps,
  { getArticles }
)(FullArticle);
