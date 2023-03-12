import { ISocialLink } from './Home.types';

export const getSocialLinks = (): Array<ISocialLink> => {
    return [
        {
            link: 'https://www.linkedin.com/in/tvetcovnichita/',
            label: 'LinkedIn',
            description: 'For work related questions.',
        },
        {
            link: 'https://github.com/tvetcov',
            label: 'GitHub',
            description: 'In case you want to check my coding skills.',
        },
        {
            link: 'https://t.me/biodeversity',
            label: 'Telegram',
            description: 'To get in touch with me in the fastest way.',
        },
    ];
};
