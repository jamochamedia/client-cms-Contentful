import React from 'react';
import ReactDOM from 'react-dom';
import * as contentful from 'contentful';
import App from './App';
import * as serviceWorker from './serviceWorker';

const SPACE_ID = 'le3jnclmcpxu';
const ACCESS_TOKEN = '995a6dca6f0f6cd6e2fdb805d631c96af1cda58513b55ba824668d8fdfa18966';

var client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: SPACE_ID,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: ACCESS_TOKEN
});

client.getEntries().then(entries => {
    entries.items.forEach(entry => {
        if(entry.fields) {
            console.log(entry.fields);
       }
    });
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
