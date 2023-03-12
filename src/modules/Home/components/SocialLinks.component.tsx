import { useEffect, useState } from 'react';

import { Grid } from '@mui/material';

import SocialCard from './SocialCard.component';

import { ISocialLink } from 'modules/Home/Home.types';
import { getSocialLinks } from 'modules/Home/home.utils';

const SocialLinks = () => {
    const [socialLinks, setSocialLinks] = useState<ISocialLink[]>([]);

    useEffect(() => {
        const links = getSocialLinks();

        setSocialLinks(links);
    }, []);

    return (
        <>
            {socialLinks.map((link) => (
                <Grid key={link.label} item md={4} sm={6} xs={12}>
                    <SocialCard {...link} />
                </Grid>
            ))}
        </>
    );
};

export default SocialLinks;
