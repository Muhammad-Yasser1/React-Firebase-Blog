import Axios from "axios";
import {
  GET_ARTICLES,
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE
} from "./types";

Axios.defaults.baseURL = "https://react-blog-9f0af.firebaseio.com/";
export const getArticles = () => dispatch => {
  Axios.get("articles.json").then(res => {
    dispatch({ type: GET_ARTICLES, payload: res.data });
  });
};
export const createArticle = article => dispatch => {
  // Axios.post("articles.json", article).then(res => {
  //   dispatch({ type: CREATE_ARTICLE, payload: res.data });
  // }).catch(err => console.log(err));
  dispatch({ type: CREATE_ARTICLE, payload: article });
};
export const updateArticle = article => dispatch => {
  // Axios.put(`articles.json/${article.id}`).then(res => {
  //   dispatch({ type: UPDATE_ARTICLE, payload: res.data });
  // }).catch(err=>console.log(err));
  dispatch({ type: UPDATE_ARTICLE, payload: article });
};
export const deleteArticle = id => dispatch => {
  // Axios.delete(`articles.json/${id}`)
  //   .then(res => {
  //     dispatch({ type: DELETE_ARTICLE, payload: res.data.id });
  //   })
  //   .catch(err => console.log(err));
  dispatch({ type: DELETE_ARTICLE, payload: id });
};
