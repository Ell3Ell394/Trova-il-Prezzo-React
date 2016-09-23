import React from 'react';
import  Game from './Game';
import Row from '../node_modules/react-bootstrap/lib/Row';
import Col from '../node_modules/react-bootstrap/lib/Col';
  //loop da gestire meglio la condizione http://stackoverflow.com/questions/30528348/setstate-inside-of-componentdidupdate




var gioco;

class GamesTable extends React.Component {
   constructor(props) {
       super(props);
       
       this.state = { 
       	  value: '',
       	  giochi: []
        }
    }
   componentDidUpdate(prevProps, prevState) {               
    	//console.log(this)
      //console.log(prevProps.game)      
      let gioco = this.props.game

      if (gioco != prevProps.game) {
            fetch(`/games/uni/user/`+gioco,{method: "get"})
            .then((response) => {
              return response.json();
            }).then((json) => {
             // console.log(json)
              // gioco = prevProps.game
               this.setState({giochi: json}); 

            }); 
      }
  }

render(){
            
          return (
            
            <div>
          		
                      <Game giochi = {this.state.giochi}/>
            </div>
    );
  }
} 


export default GamesTable;
