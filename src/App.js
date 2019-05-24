import React, { Component } from 'react'
import UsersList from './components/UsersList';

class App extends Component {

  state = {
    text: '',
    users: ['Mark', 'John', 'Jane', 'Karol', 'Martin', 'Tom']
  }


  render() {
    return (
      <div className="App">
        <input type="text"/>

        <UsersList users={this.state.users} />

      </div>
    )
  }
}
export default App;