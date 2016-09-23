import React from 'react';
import {render} from 'react-dom';
import  SearchBar from './SearchBar';
import Grid from '../node_modules/react-bootstrap/lib/Grid';
import Row from '../node_modules/react-bootstrap/lib/Row';
import Col from '../node_modules/react-bootstrap/lib/Col';
import { FormGroup, InputGroup, FormControl, Button} from '../node_modules/react-bootstrap';


var App = React.createClass({
  
   render: function() {

             
          return (
            
        <div>
            <p>We </p>
            
            <Grid>
       
                      <SearchBar />
                
            </Grid>
        </div>


       
      
    )
  }
});

render(<App />, document.querySelector("#app"));