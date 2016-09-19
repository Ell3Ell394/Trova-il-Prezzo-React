import React from 'react';
import { FormGroup } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Select from 'react-select';

require("../node_modules/react-select/dist/react-select.css");



const getOptions = (input) => {
 
 return fetch(`/games/uni/autocomplete/`+input,{method: "get"})
    .then((response) => {
      return response.json();
    }).then((json) => {
       return { options: json };
    });
}


class SearchBar extends React.Component {
   constructor(props) {
     super(props);
     this.onChange = this.onChange.bind(this);
     this.state = { value: '' }
     
   }
   
  
   onChange(val) {
     console.log('Setting value to ',val.label)
     this.setState({value: val.label})
   }
   

   render(){

             
          return (
            
            <div>
            <Select.Async
              name="testme"
              value={this.state.value}
              loadOptions={getOptions}
              
              onChange={this.onChange} />
            </div>
    );
  }
} 


export default SearchBar;

