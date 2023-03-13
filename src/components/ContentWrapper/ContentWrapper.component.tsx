import { Paper } from '@mui/material';

import { contentWrapperStyles } from './ContentWrapper.styles';

/**
 * Page content wrapper made for it's styling.
 *
 * @component
 */
export const ContentWrapper = ({ children }: { children: JSX.Element }) => {
    return (
        <Paper sx={contentWrapperStyles} square>
            {children}
        </Paper>
    );
};
