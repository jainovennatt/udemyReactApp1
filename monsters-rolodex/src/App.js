import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters: [
        {
          name: 'Ender Man',
          id: 'mn0'
        },
        {
          name: 'Spider',
          id: 'mn1'
        },
        {
          name: 'Blaze',
          id: 'mn2'
        },
        {
          name: 'Creeper',
          id: 'mn3'
        },
        {
          name: 'Ghast',
          id: 'mn4'
        },
        {
          name: 'Skeleton',
          id:  'mn5'
        },
        {
          name: 'Witch',
          id:  'mn6'
        },
        {
          name: 'Slime',
          id:  'mn7'
        }
      ]
    };
  }


  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map( monster => <h1 key={monster.id}>{monster.name} </h1>)
        }
      </div>
    );
  }
}

export default App;
