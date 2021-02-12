import fetch from 'isomorphic-fetch';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

// import Config from './config';

export const wrapRootElement = ({ element }, { wordPressUrl }) => {
		const client = new ApolloClient({
			fetch,
			uri: wordPressUrl + '/graphql',
		});

		return <ApolloProvider client={client}>{element}</ApolloProvider>;
};
