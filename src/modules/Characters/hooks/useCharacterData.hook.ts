import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useGetCharactersByPageQuery } from 'services/characters.service';
import { initPagination } from 'redux/slices/characters.slice';
import { ICharacter } from 'services/api.types';

export const useCharacterData = (
    page: string
): {
    isLoading: boolean;
    characters: ICharacter[];
} => {
    const dispatch = useDispatch();

    const { data, isLoading } = useGetCharactersByPageQuery(page);

    useEffect(() => {
        if (data) {
            dispatch(initPagination({ ...data.info, currentPage: page }));
        }
    }, [data]);

    return {
        isLoading,
        characters: (data?.results as []) || [],
    };
};
