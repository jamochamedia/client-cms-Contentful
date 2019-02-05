/**
 * Content Reducer
 */

import initialState from "../../store/initialState";
import * as types from "./types";

export default function contentReducer(state = initialState.content, action) {
  switch (action.type) {
    case types.CONTENT_LOADING:
      return {
        ...state,
        loading: action.isLoading
      };
    case types.LOAD_CONTENT_SUCCESS:
      return {
        ...state,
        posts: action.post
      };
    default:
      return state;
  }
}
