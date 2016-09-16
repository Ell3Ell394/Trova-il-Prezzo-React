import React from 'react';
import { FormGroup } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';


class SearchBar extends React.Component {
    constructor(props){
      super(props);
        this.state = {
          search: ''
       
        };
    }

    updateSearch(event){
      this.setState({search: event.target.value.substr(0,20)});
    }




    render() {
        return (
      <form>  
          <FormGroup>
                <InputGroup>
                 	<FormControl type="text" placeholder ="search" value = {this.state.search} onChange = {this.updateSearch.bind(this)}/>
	                 	<InputGroup.Button>
          					   <Button>Vai</Button>
        				    </InputGroup.Button>
                </InputGroup>
          </FormGroup>
		  </form>
            
        )
    }
}

export default SearchBar;