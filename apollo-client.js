import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api.vrmarketing.guru",
    fetchOptions: {
        mode: 'no-cors',
    },
    cache: new InMemoryCache(),
});

export default client;