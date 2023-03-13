import { SxProps } from '@mui/material';

export const errorPageStyles: Record<string, SxProps> = {
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        '& img': {
            width: 'auto',
            height: '50%',
        },
    },
};
