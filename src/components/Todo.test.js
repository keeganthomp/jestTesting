import React from 'react';
import renderer from 'react-test-renderer';
import Todo from './Todo';

test('Todo renders correctly', ()=>{
  let view = renderer
  .create(<Todo todo={{text: "Test", id: 1, done: false}}/>).toJSON();
  expect(view).toMatchSnapshot();
});