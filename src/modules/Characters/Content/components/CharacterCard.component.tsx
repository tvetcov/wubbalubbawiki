import { Box, Grid, Typography } from '@mui/material';

import Img from 'components/Img';

import { ICharacter } from 'services/api.types';
import { characterCardStyles } from './CharacterCard.styles';

const CharacterCard = ({ character }: { character: ICharacter }) => {
    const { name, image } = character;

    const handleCharacterClick = () => {
        console.log(character);
    };

    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={characterCardStyles.root}
            onClick={handleCharacterClick}
        >
            <Box>
                <Img src={image} />
            </Box>
            <Typography
                variant="subtitle1"
                color="info.contrastText"
                sx={characterCardStyles.name}
            >
                {name}
            </Typography>
        </Grid>
    );
};

export default CharacterCard;
