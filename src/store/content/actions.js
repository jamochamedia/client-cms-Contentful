/**
 * Content Actions
 */

import * as types from "./types";

export function loadContentSuccess(post) {
  return { type: types.LOAD_CONTENT_SUCCESS, post };
}
