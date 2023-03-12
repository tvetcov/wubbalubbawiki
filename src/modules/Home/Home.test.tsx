import { render, screen } from '@testing-library/react';

import Home from './';

test('Renders home page', () => {
    render(<Home />);

    const linkElement = screen.getByText(/learn react/i);

    expect(linkElement).toBeInTheDocument();
});
