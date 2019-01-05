/**
 * Content Actions
 */

import * as types from "./types";

export function contentLoading(isLoading = true) {
  return { type: types.CONTENT_LOADING, isLoading };
}

export function loadContentSuccess(post) {
  return { type: types.LOAD_CONTENT_SUCCESS, post };
}
