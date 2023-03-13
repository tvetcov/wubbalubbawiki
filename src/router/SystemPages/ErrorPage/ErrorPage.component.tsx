import { useRouteError } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { IRouteError } from './ErroPage.types';
import { errorPageStyles } from './ErrorPage.styles';
import Img from 'components/Img';

import notFoundPicSrc from 'assets/404.png';

export const ErrorPage = () => {
    const error = useRouteError() as IRouteError;

    return (
        <Box sx={errorPageStyles.root}>
            <Typography variant="h1" color="primary">
                Oops!
            </Typography>
            <p>Sorry, an unexpected error has occurred :(</p>
            <p>
                <i>{error?.statusText || error?.message}</i>
            </p>
            <Img src={notFoundPicSrc} />
        </Box>
    );
};
