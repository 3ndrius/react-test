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