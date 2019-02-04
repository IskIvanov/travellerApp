import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Countries from './Countries';
// import Countries from './Countries';

const GET_CONTINENTS = gql`
  {
    continents{
      code
      name
    }
  }`;

  const GET_COUNTRIES = gql`
    
  `

export default class Continents extends Component {
  render() {

    return(
    <Query query={GET_CONTINENTS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      
      // const continents = data.continents;
      // let countrie;
      // continents.map((name, countries)=>{
      //   countrie.push(countries);
      // })
      // console.log(countrie);

      return (
        <div className="continents">
            {/* {countries.map(name => (
              <Countries key={name.id} name={name} />
            ))} */}
        </div>
      );
    }}
  </Query>
  )
  }
}