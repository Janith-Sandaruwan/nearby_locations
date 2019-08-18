import React, { Component } from 'react';
import axios from 'axios';
import './search.css';

class Search extends Component {

    getkey(e){
        e.preventDefault();
        const typedValue = this.refs.input.value;
        const update = this.props;
        axios.post('http://localhost:3001/getLocations',{
            city : typedValue,
        })
        .then(function(response){
            update.callUpdateState(response.data.data);
        })
    }

  render() {
    return (
        <form>
          <fieldset>
            <legend>Search Nearby Places</legend>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">City</label>
              <div className="col-sm-8">
                <input type="text" className="form-control-plaintext" id="typedvalue" ref="input" placeholder="Search here"/>
              </div>
              <div className="col-sm-2">
                <button className="btn btn-primary" onClick={this.getkey.bind(this)}> Search </button>
              </div>
            </div>
          </fieldset>
        </form>
    );
  }
}

export default Search;
