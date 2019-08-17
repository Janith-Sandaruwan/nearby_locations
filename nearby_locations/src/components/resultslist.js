import React, { Component } from 'react';

class Results extends Component {
  render() {

    if(this.props.places.results !== undefined){
        var placeList = this.props.places.results.map(name=>{
            return(
                <li key={name.id}>{name.name}</li>
            )
        })
    }

    return (
        <form>
          <ul>
            {placeList}
          </ul>
        </form>
    );
  }
}

export default Results;
