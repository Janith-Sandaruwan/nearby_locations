import React, { Component } from 'react';
import './result.css'


class Results extends Component {
  render() {

    if(this.props.places.results !== undefined){
        var placeList = this.props.places.results.map(name=>{
            return(
                // <li key={name.id}>{name.name}</li>
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1" key={name.id}>{name.name}</h5>
                      <small>Ratings : {name.user_ratings_total}</small>
                    </div>
                    <p className="mb-1">{name.formatted_address}</p>                    
                  </a>
                </div>
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
