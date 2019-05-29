import React from 'react';
import App from './App';
import { shallow, render, mount } from 'enzyme';

import UsersList from './components/UsersList';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


it('renders without crashing', () => {
  shallow(<App />); // render component without nested component (unit test)
});

it('includes input', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<input />)).toEqual(true)
});
it('includes UsersList', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<UsersList />)).toEqual(true)
});


//test props 
it('shows message when there are no users', () => {
  const userList = shallow(<UsersList  users={[]} />);
  expect(userList.text()).toContain('User not found!')
});

it('does not show message when there are users' , () => {
  const usersList = shallow(<UsersList users={['Tom']} /> );
  expect(usersList.text()).not.toContain('User not found!')
});

it('shows a list of users', () => {
  const users = ['John', 'Tom'];
  const usersList = shallow(<UsersList users={users} />);

  expect(usersList.find('li').length).toEqual(users.length);
});

describe('list of user', () => {
  const users = ['Mark', 'Tom'];
  const usersList = shallow(<UsersList users={users} />);
  users.forEach(user => {
    it(`includes name ${user} on the list `, () => {
      expect(usersList.containsMatchingElement(<li>{user}</li>)).toEqual(true)
    });
  });
});


it('passes all users to the UsersList', () => {
  const app = shallow(<App />);
  expect(app.find('UsersList').prop('users')).toEqual(['Mark', 'John', 'Jane', 'Karol', 'Martin', 'Tom'])
});