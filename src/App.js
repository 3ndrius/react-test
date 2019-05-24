import React, { Component } from 'react'
import UsersList from './components/UsersList';

const users = ['Mark', 'John', 'Jane', 'Karol', 'Martin', 'Tom'];
class App extends Component {

  state = {
    filtered: users
    
  }

  filterUser = (e) => {
    let text = e.target.value;
    let filtered = users.filter(user=> {
      return (
        user.toLowerCase().includes(text.toLowerCase())
      )
    })
    this.setState({
      filtered
    })
  }


  render() {
    return (
      <div className="App">
        <input type="search"  onChange={this.filterUser}/>

        <UsersList users={this.state.filtered} />

      </div>
    )
  }
}
export default App;