import { createAction } from "@reduxjs/toolkit";
// import { CREATECONTACTS, REMOVECONTACTS } from "./types";


export const contactCreate = createAction('CREATECONTACTS')
 export const contactRemove = createAction('REMOVECONTACTS')


// export const contactCreate = contact => ({
//   type: CREATECONTACTS,
//   payload: {id:`${contact.id}`, name: `${contact.name}`, number: `${contact.number}` },
// });

// export const contactRemove = (contacts, contactId) => ({
//   type: REMOVECONTACTS,
//   payload: contacts.filter(contact => contact.id !== contactId),
// });


