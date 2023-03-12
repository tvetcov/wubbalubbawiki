import { Outlet } from 'react-router-dom';

import { Container } from '@mui/material';

import { NavBar } from 'components/NavBar/NavBar.component';

export const Root = () => {
    return (
        <Container>
            <NavBar />
            <Outlet />
        </Container>
    );
};
