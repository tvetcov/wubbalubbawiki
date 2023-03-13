import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Characters from './';

import { testServerResponseMock, TestWrapper } from 'utils/test.utils';

const handlers = [
    rest.get(
        'https://rickandmortyapi.com/api/character/?page=1',
        (req, res, ctx) => {
            // successful response
            return res(
                ctx.status(200),
                ctx.json(testServerResponseMock),
                ctx.delay(30)
            );
        }
    ),
];

const server = setupServer(...handlers);

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => server.close());

describe('Characters page render', () => {
    test('Renders characters preloader skeletons', () => {
        render(
            <TestWrapper>
                <Characters />
            </TestWrapper>
        );
        const skeletonElements = screen.getAllByRole(
            'character-skeleton-wrapper'
        );

        expect(skeletonElements).toHaveLength(20);
    });

    test('Renders character list from an api call', async () => {
        render(
            <TestWrapper>
                <Characters />
            </TestWrapper>
        );

        await waitFor(() =>
            expect(screen.getAllByRole('character-card')).toHaveLength(20)
        );
    });

    test('Is able to change pages', async () => {
        render(
            <TestWrapper>
                <Characters />
            </TestWrapper>
        );

        const nextPageButton = await waitFor(() =>
            screen.getByLabelText('Go to next page')
        );

        fireEvent.click(nextPageButton);

        await waitFor(() =>
            expect(
                screen.getByRole('button', { current: true })
            ).toHaveTextContent('2')
        );
    });
});
