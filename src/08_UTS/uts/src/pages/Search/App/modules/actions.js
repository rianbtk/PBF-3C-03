import axios from 'axios';
import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from './index';

export const searchStart = () => {
  return {
    type: SEARCH_REQUEST,
  };
};

export const searchSuccess = (images) => {
  return {
    type: SEARCH_SUCCESS,
    payload: images,
  };
};

export const searchError = (errors) => {
  return {
    type: SEARCH_ERROR,
    errors,
  };
};

export const fetchImage = (keyword) => {
  return (dispatch) => {
    dispatch(searchStart());
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=dc6zaTOxFJmzC`)
      .then((response) => {
        const images = response.data.data.map((image) => image.images.original.url);
        dispatch(searchSuccess(images));
      })
      .catch((error) => {
        dispatch(searchError(error));
      });
  };
};
