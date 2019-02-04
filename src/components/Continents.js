import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Countries from './Countries';

const GET_CONTINENTS = gql`
  {
    continents{
      code
      name
    }
  }`;

export default class Continents extends Component {
  render() {

    return(
    <Query query={GET_CONTINENTS}>
    {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

      return (
        <div className="continents">
            {data.continents.map(continents => (
              <h1>{continents}</h1>,
              // <Countries key={name.id} name={name} />
              console.log(continents)
            ))}
        </div>
      );
    }}
  </Query>
  )
  }
}