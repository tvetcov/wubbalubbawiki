import { Paper, Tab, Tabs } from '@mui/material';

import { navBarStyles } from './NavBar.styles';
import { a11yProps } from './navBar.utils';
import { useNavBar } from './useNavBar.hook';

/**
 * Application navigation bar.
 * Static navigation for the app.
 *
 * @component
 */
export const NavBar = () => {
    const { selectedTab, handleChange } = useNavBar();

    return (
        <Paper sx={navBarStyles} square>
            <Tabs value={selectedTab} onChange={handleChange}>
                <Tab label="Home" {...a11yProps(0)} />
                <Tab label="Characters" {...a11yProps(1)} />
            </Tabs>
        </Paper>
    );
};
