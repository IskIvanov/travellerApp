import React, { Component } from 'react'

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
      <div>
          <a href="#" onClick={handleCLick}>
                {this.props.name}
          </a>
      </div>
    )
  }
}
