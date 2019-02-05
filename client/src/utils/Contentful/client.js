import * as contentful from "contentful";

//Contentful ID's
const SPACE_ID = "le3jnclmcpxu";
const ACCESS_TOKEN =
  "995a6dca6f0f6cd6e2fdb805d631c96af1cda58513b55ba824668d8fdfa18966";

export const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});
