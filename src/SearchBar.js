import React from 'react';
import Select from 'react-select';
import  GamesTable from './GamesTable';
require("../node_modules/react-select/dist/react-select.css");
import Row from '../node_modules/react-bootstrap/lib/Row';
import Col from '../node_modules/react-bootstrap/lib/Col';

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
     // console.log(val)
      console.log('Setting value to ',val.label)
      this.setState({value: val.label})
  }
   

   render(){
            
          return (
        
        <div>  
            <div>      
              <Row>
                  <Col md={4} mdOffset={4} style={{"marginTop" : "50px"}}>
                      <Select.Async
                          name="testme"
                          value={this.state.value}
                          loadOptions={loadOptions}
                          onChange={this.onChange} />
                  </Col>
              </Row>
               

            </div>

          <div> 
            <Row>
              <Col md={10}  mdOffset={1} style={{"marginTop" : "40px"}}>
                <GamesTable game = {this.state.value} />
              </Col>
            </Row>
          </div>

       </div>





            

    );
  }
} 


export default SearchBar;

