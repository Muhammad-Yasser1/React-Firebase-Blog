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
  dispatch({ type: CREATE_ARTICLE, payload: article });
};

export const updateArticle = article => dispatch => {
  dispatch({ type: UPDATE_ARTICLE, payload: article });
};

export const deleteArticle = id => dispatch => {
  dispatch({ type: DELETE_ARTICLE, payload: id });
};
