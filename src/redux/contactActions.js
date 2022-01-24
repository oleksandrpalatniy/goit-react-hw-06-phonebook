import { createAction } from '@reduxjs/toolkit';

export const addCon = createAction('contacts/addContact');
export const delCon = createAction('contacts/deleteContact');
export const filterCon = createAction('contacts/filterContact');
