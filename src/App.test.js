import React from 'react';
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent, screen} from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from "./store/configure-store";
import App from './App';
const store = configureStore();
beforeEach(() =>{
  render( <Provider store={store}><App /></Provider>);
})
describe('render app', () => {

  it('test add item', () => {   
    fireEvent.click(screen.getByTestId('addItem'));
    expect(screen.getAllByTestId(/removeItem/i)).toHaveLength(5)
  })
  it('test remove item', () => {
    fireEvent.click(screen.getByTestId('removeItem1'));
    expect(screen.getAllByTestId(/removeItem/i)).toHaveLength(4)
  })
  it('test select and deselect item', () => {
    expect(screen.getByText(/No item selected/i)).toHaveAttribute('data-testid','noitemselected');
    fireEvent.click(screen.getByTestId('selectItem0'));
    expect(screen.queryByTestId('noitemselected')).toBeNull();
  })
  it('test deselect item', () => {
    fireEvent.click(screen.getByTestId('selectItem0'));
    expect(screen.queryByTestId('noitemselected')).toBeNull();
    fireEvent.click(screen.getByTestId('selectItem0'));
    expect(screen.getByText(/No item selected/i)).toHaveAttribute('data-testid','noitemselected');
   
  })
  
})
