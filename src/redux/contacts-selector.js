import { createSelector } from '@reduxjs/toolkit';
import { getContacts, getFilter } from './getTodos';

export const filteredContacts = createSelector(
  getContacts,
  getFilter,

  (contacts, filterValue) => {
    console.log(contacts);
    return contacts.filter(({ name }) =>
      name.toLowerCase().startsWith(filterValue)
    );
  }
);
