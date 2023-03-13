import { SxProps } from '@mui/material';

export const homePageStyles: Record<string, SxProps> = {
    root: {
        height: '100%',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',

        '& img': {
            maxWidth: '100%',
        },
    },
    socialLinks: {
        paddingBottom: 3,
        alignItems: 'flex-end',
    },
};
