// Apollo for GraphQL
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient<object>({
	cache: new InMemoryCache(),
	uri: 'https://live-asa-headless-cms.pantheonsite.io/wp/graphql',
});
