import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./contacts-actions";


export const contactReducer = createReducer([], {
    [addContact]: (state, {payload})=> {
        let duplicate = state.find((contact) => contact.name === payload.name);
        if(duplicate){
            alert('Такой контакт уже существует')
            return state; }
        else{
            return [...state, payload]
        }
    },
    [deleteContact]: (state, {payload})=>
    state.filter((contact)=> contact.id !== payload)
})