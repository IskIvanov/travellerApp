import React, { Component } from 'react';

import Search from './components/Search';
import Continents from './components/Continents'
import ExchangeRates from './components/exchangeRate';

import ApolloClient from "apollo-boost";
import gql from 'graphql-tag';
import { ApolloProvider } from "react-apollo";

import './App.css';

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
         <h1> Travellers Info </h1>
        <Search />
        <Continents />
        <div>
           <h2>My first Apollo app 🚀</h2>
           <ExchangeRates />
        </div>
      </ApolloProvider>
      );
  }
}

export default App;
