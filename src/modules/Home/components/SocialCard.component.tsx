import { memo } from 'react';

import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';

import { ISocialLink } from '../Home.types';

/**
 * Social link card component made for easy access to the links.
 *
 * @component
 */
const SocialCard = ({ link, label, description }: ISocialLink) => {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {label}
                </Typography>
                <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    color="text.secondary"
                >
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    variant="contained"
                    href={link}
                    target="_blank"
                >
                    Connect
                </Button>
            </CardActions>
        </Card>
    );
};

export default memo(SocialCard);
