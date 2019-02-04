import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Countries from './Countries';

const SEARCH_QUERY = gql`
{
   countries{
      code
      name
      native
      emoji
      currency
        languages {
          code
          name
        }
  }
  }
}`;

class Search extends Component {

  state = {
    countries: [],
    filter: ''
  }

  render() {
    return (
      <div>
        <div>
          Search
          
          <input
            type='text'
            onChange={e => this.setState({ filter: e.target.value })}
          />

          <button onClick={() => this._executeSearch()}>OK</button>
        </div>

        {this.state.countries.map((link, index) => (
          <Countries key={link.id} link={link} index={index} />
        ))}

      </div>
    )
  }

  _executeSearch = async () => {
    console.log("OK was clicked");

    const { filter } = this.state
    
    const result = await this.props.client.query({
      query: SEARCH_QUERY,
      variables: { filter },
    });

    const countries = result.data.countries.name
    
    this.setState({ countries })
  }
}

export default withApollo(Search);