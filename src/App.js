import React, { Component } from 'react';

import Search from './components/Search';
import Continents from './components/Continents'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import './App.scss';

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
       <div className='App'>
          <h1> Travellers Info 🚀 </h1>
          <Search />  
          <Continents />
        </div>
      </ApolloProvider>
      );
  }
}

export default App;
