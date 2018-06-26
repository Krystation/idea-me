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
      addNewActive: ''
    }
    this.shuffleIdea = this.shuffleIdea.bind(this);
    this.addNew = this.addNew.bind(this);
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

  addNew(data){
    if(data === ''){
      this.setState({addNewActive: ''})
    }else{
      this.setState({addNewActive: 'active'})
    }
  }

  toggle(){
    this.setState({addNewActive: !this.state.addNewActive});
  }
  
  render() {
    return (
      <div className="App">          
        <Head activeState={this.addNew}/>
        <div className="content">
          <AddItem activeClass={this.state.addNewActive}/>
          <div id="randomizer" onClick={this.shuffleIdea}></div>
          <div id="random_result">
            <span>{this.state.currentIdea}</span>
          </div>
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
