import React, { Component } from 'react';
import Head from './Head';
import './stylez/styles.css';
import AddItem from './AddItem';
import firebase from './firebase';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newIdea: '',
      wakItems: []
    }
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
  render() {
    return (
      <div className="App">          
        <Head/>
        <div className="content">
          <AddItem/>
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
