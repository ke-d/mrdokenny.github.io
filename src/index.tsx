import {
	InMemoryCache,
} from 'apollo-cache-inmemory';
import {
	ApolloClient,
} from 'apollo-client';
import {
	HttpLink,
} from 'apollo-link-http';
import * as React from 'react';
import {
	ApolloProvider,
} from 'react-apollo';
import * as ReactDOM from 'react-dom';
import {
	BrowserRouter,
} from 'react-router-dom';
import App from './App';
import envJson from './env.json';

const client = new ApolloClient({
  link: new HttpLink({
  uri: 'http://localhost:5000/graphql',
}),
  cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>,
	document.getElementById('root'),
);
