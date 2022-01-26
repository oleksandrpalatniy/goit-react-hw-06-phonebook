import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addCon, delCon, filterCon } from './contactActions';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const contacts = createReducer(initialState, {
  [addCon.type]: (state, action) => {
    state.contacts.items = [...state.contacts.items, action.payload];
  },
  [delCon.type]: (state, action) => {
    state.contacts.items = [
      ...state.contacts.items.filter(contact => contact.id !== action.payload),
    ];
  },
  [filterCon.type]: (state, action) => {
    state.contacts.filter = action.payload;
  },
});




export default combineReducers({
  contacts,
})