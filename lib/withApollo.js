import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { GRAPHQL_URL } from "../config";
import Cookie from "js-cookie";

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: GRAPHQL_URL,
      cache: new InMemoryCache().restore(initialState || {}),
      onError: ({ networkError, graphQLErrors }) => {
        console.log("graphQLErrors", graphQLErrors);
        console.log("networkError", networkError);
      },
      fetchOptions: {
        credentials: "include"
      },
      request: operation => {
        const token = Cookie.get("access_token");
        operation.setContext({
          headers: {
            authorization: token
          }
        });
      }
    })
);