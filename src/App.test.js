import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from "react-test-renderer";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test ('test jumlah users', () =>{
  const component = renderer.create(
    <App/>
  );
  let tree= component.toJSON();
  expect(tree).toMatchSnapshot();

  component.getInstance()._handleClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component.getInstance()._handleClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

})