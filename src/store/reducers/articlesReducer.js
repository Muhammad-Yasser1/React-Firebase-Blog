import {
  GET_ARTICLES,
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE
} from "../actions/types";

const initialState = {
  articles: [],
  article: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ARTICLES:
      return { ...state, articles: [...payload] };
    case CREATE_ARTICLE:
      return { ...state, articles: [...state.articles, payload] };
    case UPDATE_ARTICLE:
      return {
        ...state,
        articles: state.articles.map(article => {
          if (article.id == payload.id) {
            payload.image = article.image;
            return payload;
          }
          return article;
        })
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(article => {
          return article.id != payload;
        })
      };
    default:
      return state;
  }
};
