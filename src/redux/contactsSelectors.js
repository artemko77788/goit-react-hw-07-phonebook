import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.filter.value.toLowerCase();
export const getContacts = state => state.contacts.item;

export const filteredContacts = createSelector(
  [response => response.data, (_, filter) => filter],

  (contacts, filterValue) => {
    console.log(filterValue);
    return (
      contacts?.filter(({ name }) =>
        name.toLowerCase().startsWith(filterValue)
      ) ?? []
    );
  }
);
