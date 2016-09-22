import React from 'react';
import Table from '../node_modules/react-bootstrap/lib/Table';
class Game extends React.Component {
   constructor(props) {
     super(props);
    
     this.state = { 
     	value: '',
     	giochi: []
      }
}


   render(){
           let arrgiochi = this.props.giochi
           console.log(arrgiochi)
        var el = document.createElement('a');
          return (
            
            <div>
                <Table striped bordered condensed hover>
                  <thead>
                        <tr>
                          
                          <th>Descrizione</th>
                          <th>Prezzo</th>
                          <th>Link</th>
                        </tr>
                  </thead>
                    <tbody>
                      {
                          arrgiochi.map((giochi)=> {

                            el.href = giochi.link;
                            var split = el.hostname.split(".");
                            el.hostname = split[1];

                              let riga =   <tr key={giochi.link}> <td> {giochi.title} </td><td> {giochi.prezzo} </td> <td> <a href={giochi.link}target='_blank'>Link a {el.hostname}</a></td></tr>
                              return riga
                          })
                      }
                    </tbody>
                </Table>
            </div>
    );
  }
} 


export default Game;
