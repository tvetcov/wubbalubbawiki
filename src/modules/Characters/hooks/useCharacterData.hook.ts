import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

import { useGetCharactersByPageQuery } from 'services/characters.service';
import { initPagination } from 'redux/slices/characters.slice';
import { ICharacter } from 'services/api.types';
import { getCurrentPageFromLocalStorage } from 'utils/localStorage.utils';
import { useParams } from 'react-router-dom';

/**
 * A custom Characters data handling hook.
 * Basically gets data from server, dispatches pagination init action and
 * sets error state.
 *
 * @return {Object} { isLoading, error, characters }
 */
export const useCharacterData = (): {
    isLoading: boolean;
    characters: ICharacter[];
    error?: FetchBaseQueryError | SerializedError | boolean;
} => {
    const dispatch = useDispatch();
    const params = useParams();
    const page = params.page || getCurrentPageFromLocalStorage();

    const { data, isLoading, error } = useGetCharactersByPageQuery(page);

    useEffect(() => {
        if (data?.info) {
            dispatch(initPagination({ ...data.info, currentPage: page }));
        }
    }, [data]);

    return {
        isLoading,
        error: error || !Number.isInteger(+page),
        characters: (data?.results as []) || [],
    };
};
