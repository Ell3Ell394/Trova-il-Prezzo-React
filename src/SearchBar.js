import React from 'react';
import Select from 'react-select';
import { FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap';



require("../node_modules/react-select/dist/react-select.css");

const minimumInput = 3
let previousLoadPromise

var options = [];

function loadOptions (inputValue = '') {
  if (inputValue.length >= minimumInput) {
          previousLoadPromise = fetch(`/games/uni/autocomplete/`+inputValue,{method: "get"})
          .then((response) => {
            return response.json();
          }).then((json) => {
             return { options: json };
          }); 
        
  } else{

      previousLoadPromise = Promise.resolve()
      
    }
  return previousLoadPromise
  
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
              loadOptions={loadOptions}
              
              onChange={this.onChange} />

            </div>
    );
  }
} 


export default SearchBar;

