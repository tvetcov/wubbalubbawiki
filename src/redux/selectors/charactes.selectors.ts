import { IState } from 'redux/state.types';

export const selectCurrentPage = (state: IState): string => {
    return state.currentPage;
};

export const selectTotalPages = (state: IState): number => {
    return state.totalPages;
};
