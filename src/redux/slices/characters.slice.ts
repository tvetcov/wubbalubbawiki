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
            state.prevPage = action.payload.prev;
            state.nextPage = action.payload.next;
            state.totalPages = action.payload.count;
            state.currentPage = action.payload.currentPage;
        },
    },
});

export const { initPagination } = counterSlice.actions;

export default counterSlice.reducer;
