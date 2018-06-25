import React, { Component } from 'react';
import Head from './Head';
import './stylez/styles.css';
import AddItem from './AddItem';
import RandomResult from './RadomizeResult';
import firebase from './firebase';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newIdea: '',
      wakItems: [],
      currentIdea: 'Your Wak Project is...',
      addNewActive: false
    }
    this.shuffleIdea = this.shuffleIdea.bind(this);
  }
  componentDidMount(){
    const itemRef = firebase.database().ref('wakWednesday');
    itemRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      let i = 0;
      for(let item in items){
        newState.push({
          id: ++i,
          idea: items[item].idea
        })
      }
      this.setState({wakItems: newState})
    });
  }

  shuffleIdea(){
    let randNum = Math.floor(Math.random() * (this.state.wakItems.length - 1)) + 1;
    this.setState({
      currentIdea: this.state.wakItems[randNum].idea
    }); 
  }

  addNew = (active) =>{

  }
  
  render() {
    return (
      <div className="App">          
        <Head activeState={this.addNew}/>
        <div className="overlay"></div>
        <div className="content">
          <AddItem/>
          <div id="random_result">
            <span>{this.state.currentIdea}</span>
          </div>
          <div id="randomizer" onClick={this.shuffleIdea}></div>
          <div className="wakList">
            <ul>
              {this.state.wakItems.map((item) => {
                return(
                  <li key={item.id}>
                    <h3>{item.id}. {item.idea}</h3>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
