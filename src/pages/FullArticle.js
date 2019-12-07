import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getArticles } from "../store/actions/articlesActions";

const FullArticle = props => {
  const [article, setArticle] = useState({
    author: "",
    content: "",
    created_at: "",
    image: "",
    updated_at: "",
    title: ""
  });

  useEffect(() => {
    if (!props.articles.length) {
      props.getArticles();
    } else {
      const checkIfArticleExists =
        props.articles.findIndex(
          article => article.id === +props.match.params.id
        ) < 0;
      if (checkIfArticleExists || props.editMode) {
        return props.history.push("/");
      }
    }
    const { author, content, created_at, updated_at, title, image } =
      props.articles.find(article => article.id === +props.match.params.id) ||
      {};
    setArticle({
      image,
      author,
      content,
      created_at,
      updated_at,
      title
    });
    //eslint-disable-next-line
  }, [props.articles, props.match.params.id, props.editMode]);

  return (
    <div className="Article row p-4">
      <div className="col-lg-4 col-md-6 col-9 mx-auto">
        {article.image && (
          <img
            className="img-fluid"
            src={require(`../images/${article.image}`)}
            alt="Article"
          />
        )}
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
};

const mapStateToProps = state => ({
  articles: state.articles.articles,
  editMode: state.editMode.editMode
});

export default connect(mapStateToProps, { getArticles })(FullArticle);
