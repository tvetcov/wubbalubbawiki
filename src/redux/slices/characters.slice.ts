import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../initialState';
import { IState } from '../state.types';
import { IMetaInfo } from 'services/api.types';

export const counterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        initPagination: (
            state: IState,
            action: PayloadAction<IMetaInfo & { currentPage: string }>
        ) => {
            state.totalPages = action.payload.pages;
            state.currentPage = action.payload.currentPage;
        },
        changePage: (
            state: IState,
            action: PayloadAction<{ page: string }>
        ) => {
            state.currentPage = action.payload.page;
        },
    },
});

export const { initPagination, changePage } = counterSlice.actions;

export default counterSlice.reducer;
