import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import Pagination from 'components/Pagination';

import {
    selectCurrentPage,
    selectTotalPages,
} from 'redux/selectors/charactes.selectors';
import { IState } from 'redux/state.types';
import { changePage } from 'redux/slices/characters.slice';
import { ICharacter } from 'services/api.types';
import CharacterCard from './components/CharacterCard.component';

export const Content = ({ characters }: { characters: Array<ICharacter> }) => {
    const dispatch = useDispatch();

    const handlePageChange = (page: number) => {
        dispatch(changePage({ page: String(page) }));
    };

    const currentPage = useSelector((state: { characters: IState }) =>
        selectCurrentPage(state.characters)
    );

    const totalPages = useSelector((state: { characters: IState }) =>
        selectTotalPages(state.characters)
    );

    return (
        <Grid container spacing={3}>
            <Grid item container xs={12} justifyContent="center">
                <Pagination
                    currentPage={+currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </Grid>
            <Grid item container xs={12}>
                {characters.map((character: ICharacter) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </Grid>
        </Grid>
    );
};
