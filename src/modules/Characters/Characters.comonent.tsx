import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.component';
import { useCharacterData } from './hooks/useCharacterData.hook';
import { SkeletonLoader } from './components/SkeletonLoader.component';

export const Characters = () => {
    const { characters, isLoading } = useCharacterData('1');

    console.log(characters);

    return (
        <ContentWrapper>
            {isLoading ? <SkeletonLoader /> : <div>Characters</div>}
        </ContentWrapper>
    );
};
