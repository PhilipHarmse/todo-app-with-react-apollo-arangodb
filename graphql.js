import ApolloClient, { createNetworkInterface } from 'apollo-client';
import gql from 'graphql-tag';

const networkInterface =  createNetworkInterface('http://localhost:9500/graphql');

let client = new ApolloClient({
    networkInterface
});



var query = {
        query: gql`
        {
            toDo (id:1) {
                id
                name
                status
                
            }
        }
        `}
console.log(query)

function getFirstData() {
    client.query({
        query: query.query,
        forceFetch: false,
        }).then(({ data }) => {
            console.log("got data", data);
        }).catch((error) => {
            console.log("there was an error sending the query", error)
    })
}


getFirstData()