import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users:[]
    }
  }

  fetchProject(){
    axios.get('http://localhost:3001/api/v1/users.json')
      .then((response)=>{
        const {data} = response;
        this.setState({
          users: data
        })
      }).catch((error)=> {

    });
  }

  render() {
    const {users} = this.state;
    return (
      <div className="App">
        <h1>Users1</h1>
        {
          users.map((item,index) =>{
            return (<div className="portfolio__item" key={index}>
              <div className="portfolio__image">
                {item.first_name}
              </div>
            </div>)
          })
        }
      </div>
    );
  }
}

export default App;
