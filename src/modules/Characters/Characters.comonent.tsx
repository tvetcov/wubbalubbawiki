import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.component';

import { useGetCharactersByPageQuery } from 'services/characters.service';
import { initPagination } from '../../redux/slices/characters.slice';

export const Characters = () => {
    const { data, isLoading } = useGetCharactersByPageQuery('1');
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            dispatch(initPagination({ ...data.info, currentPage: '1' }));
        }
    }, [data]);

    return (
        <ContentWrapper>
            {isLoading ? <span>Loading...</span> : <div>Characters</div>}
        </ContentWrapper>
    );
};
