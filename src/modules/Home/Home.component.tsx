import React from 'react';

import { Grid, Tooltip, Typography } from '@mui/material';

import ContentWrapper from 'components/ContentWrapper';
import SocialLinks from './components/SocialLinks.component';
import { homePageStyles } from './Home.styles';

import gif from 'assets/home_page.gif';

/**
 * Home page with author's social links and a brief project description.
 * Also contains an awesome gif :)
 *
 * @component
 */
export const Home = () => {
    return (
        <ContentWrapper>
            <Grid sx={homePageStyles.root} container flexDirection="column">
                <Grid item>
                    <Tooltip
                        title="Wubba Lubba Dub-Dub is Rick's catchphrase"
                        arrow
                    >
                        <Typography variant="h1" gutterBottom>
                            Wubba Lubba Wiki
                        </Typography>
                    </Tooltip>
                    <Typography
                        variant="h2"
                        color="text.secondary"
                        gutterBottom
                    >
                        It's a small web based wiki app dedicated to{' '}
                        <a
                            href="https://en.wikipedia.org/wiki/Rick_and_Morty"
                            target="_blank"
                        >
                            Rick And Morty
                        </a>{' '}
                        characters.
                    </Typography>
                    <Grid item>
                        <img src={gif} alt="catchGif" />
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={3}
                    item
                    sx={homePageStyles.socialLinks}
                >
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom>
                            Developed By Nichita Tvetcov. Social links below:
                        </Typography>
                    </Grid>
                    <SocialLinks />
                </Grid>
            </Grid>
        </ContentWrapper>
    );
};
