import { useLocation } from 'react-router-dom';

import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.component';
import { SkeletonLoader } from './components/SkeletonLoader.component';
import Content from './Content';

import { useCharacterData } from './hooks/useCharacterData.hook';
import ErrorPage from '../../router/SystemPages/ErrorPage';

export const Characters = () => {
    const location = useLocation();
    const { characters, isLoading, error } = useCharacterData();

    return (
        <ContentWrapper key={location.pathname}>
            {error ? (
                <ErrorPage />
            ) : isLoading ? (
                <SkeletonLoader />
            ) : (
                <Content characters={characters} />
            )}
        </ContentWrapper>
    );
};
