import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_COUNTRIES = gql`
{
  countries{
    code
    name
  }
}
`
export default class Countries extends Component {
     constructor(props) {
          super(props)
        
          this.state = {
          
          }
        }

 render() {
     function handleCLick(e) {
          e.preventDefault();
          console.log("Clicked");
     }

    return (
     <Query query={GET_COUNTRIES}>
          {({ loading, error, data }) => {
             if (loading) return "Loading...";
             if (error) return `Error! ${error.message}`;
            
             return(
               <div>
                  <h1></h1>
               </div>
             );
             
          }};

     </Query>
    )
  }
}
