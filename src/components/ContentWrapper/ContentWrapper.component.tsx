import { Paper } from '@mui/material';

import { contentWrapperStyles } from './ContentWrapper.styles';

export const ContentWrapper = ({ children }: { children: JSX.Element }) => {
    return (
        <Paper sx={contentWrapperStyles} square>
            {children}
        </Paper>
    );
};
