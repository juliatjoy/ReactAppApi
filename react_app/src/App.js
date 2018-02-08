import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {users: []}

  componentDidMount(){
    fetch('/api/v1/users.json',{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    })
     .map((res) => res.json())
     .subscribe((posts) => {
        console.log(posts);
        this.list = posts;
      }, (err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Users1</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.first_name}</div>
        )}
      </div>
    );
  }
}

export default App;
