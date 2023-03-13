import { render, screen } from '@testing-library/react';

import Home from './';
import { getSocialLinks } from './home.utils';

describe('Home page render', () => {
    test('Renders home page title', () => {
        render(<Home />);

        const titleElement = screen.getByText(/Wubba Lubba Wiki/i);

        expect(titleElement).toBeInTheDocument();
    });

    test('Renders home page gif', () => {
        render(<Home />);

        const gif = screen.getByAltText(/catchGif/i);

        expect(gif).toBeInTheDocument();
    });

    test('Renders social links', () => {
        render(<Home />);

        const linkedIn = screen.getByText(/LinkedIn/i);
        const gitHub = screen.getByText(/GitHub/i);
        const telegram = screen.getByText(/Telegram/i);

        expect(linkedIn).toBeInTheDocument();
        expect(gitHub).toBeInTheDocument();
        expect(telegram).toBeInTheDocument();
    });
});

describe('Home age utils', () => {
    test('Able to get social links as expected', () => {
        const expectedResult = [
            {
                link: 'https://www.linkedin.com/in/tvetcovnichita/',
                label: 'LinkedIn 👨‍💼',
                description: 'For work related questions.',
            },
            {
                link: 'https://github.com/tvetcov',
                label: 'GitHub 💻',
                description: 'In case you want to check my coding skills.',
            },
            {
                link: 'https://t.me/biodeversity',
                label: 'Telegram 💬',
                description: 'To get in touch with me in the fastest way.',
            },
        ];

        expect(getSocialLinks()).toEqual(expectedResult);
    });
});
