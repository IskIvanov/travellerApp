import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
// import Countries from './Countries';

const GET_CONTINENTS = gql`
{
  continents{
    name
    code
    countries{
      name
    }
  }
}
`
export default class Continents extends Component {
  render() {

    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }

    return(
    <Query query={GET_CONTINENTS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      
      return (
        <div className="continents">
          {data.continents.map(continents => (
            <a href="#" onClick={handleClick}>
              <p><b>{continents.name}</b></p>
           </a>
          ))}
        </div>
      );
    }}
  </Query>
  )
  }
}