import { SxProps } from '@mui/material';

export const characterCardStyles: Record<string, SxProps> = {
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        padding: 2,
        position: 'relative',

        '& img': {
            maxWidth: '100%',
            maxHeight: 'auto',
        },

        '&:hover .MuiTypography-root': {
            opacity: 1,
        },
    },
    name: {
        backgroundColor: 'info.main',
        padding: 1,
        position: 'absolute',
        width: '90%',
        bottom: 0,
        opacity: 0.5,
    },
};
