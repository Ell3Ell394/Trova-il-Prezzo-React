import React from 'react';
import {render} from 'react-dom';
import  SearchBar from './SearchBar';



var App = React.createClass({
  
   render: function() {

             
          return (
            <div>
            <p>We </p>
            <div className="row col-md-4 col-md-offset-4">
              <SearchBar />
            </div>
        </div>

      
    )
  }
});

render(<App />, document.querySelector("#app"));