// import React from 'react';
// import { Query } from "react-apollo";
// import gql from "graphql-tag";
 
// const ExchangeRates = props => {
// return(
//      <Query
//           query={gql`
//             {
//                continents{
//                 name
//              } 
//            }
//           `}
//           >
//           {({ loading, error, data }) => {
//                if (loading) return <p>Loading...</p>;
//                if (error) return <p>Error :(</p>;
     
//                return data.continents.map(({name}) => (
//                <div key={continents}>
//                     <p>{name}</p>
//                </div>
//                ));
//           }}
//           </Query>
//      );
// }

// export default ExchangeRates;
