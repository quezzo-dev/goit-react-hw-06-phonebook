import {filter} from './filter-actions'
import { createReducer } from '@reduxjs/toolkit'

export const filterReducer = createReducer('', {
    [filter]: (state, action)=> action.payload
})