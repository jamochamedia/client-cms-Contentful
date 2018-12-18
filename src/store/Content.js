import * as contentful from "contentful";
import * as actions from "./content/actions";

//Contentful ID's
const SPACE_ID = "le3jnclmcpxu";
const ACCESS_TOKEN =
  "995a6dca6f0f6cd6e2fdb805d631c96af1cda58513b55ba824668d8fdfa18966";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

export function loadContent() {
  return dispatch => {
    dispatch(actions.contentLoading());
    return client
      .getEntries({
        content_type: "linkedInTextPost"
      })
      .then(({ items }) => {
        dispatch(actions.loadContentSuccess(items));
        dispatch(actions.contentLoading(false));
      })
      .catch(error => {
        console.log(error);
        dispatch(actions.contentLoading(false));
      });
  };
}
