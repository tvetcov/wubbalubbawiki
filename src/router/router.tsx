import { createHashRouter } from 'react-router-dom';

import Root from 'router/SystemPages/Root';
import Home from 'modules/Home';
import Characters from 'modules/Characters';

import { ErrorPage } from 'router/SystemPages/ErrorPage/ErrorPage.component';

import { ROUTE_LIST } from './config';

const router = createHashRouter([
    {
        path: ROUTE_LIST.home,
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ROUTE_LIST.home,
                element: <Home />,
            },
            {
                path: ROUTE_LIST.characters,
                element: <Characters />,
            },
        ],
    },
]);

export default router;
