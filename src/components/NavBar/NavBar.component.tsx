import { SyntheticEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Paper, Tab, Tabs } from '@mui/material';

import { navBarStyles } from './NavBar.styles';
import { a11yProps, NAV_BAR_PATH_MAP } from './navBar.utils';

export const NavBar = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const navigate = useNavigate();

    const handleChange = useCallback(
        (_: SyntheticEvent, newValue: number) => {
            const navigatePath =
                newValue === 0
                    ? NAV_BAR_PATH_MAP[newValue]
                    : NAV_BAR_PATH_MAP[newValue].replace(':page', '1');

            setSelectedTab(newValue);
            navigate(navigatePath);
        },
        [selectedTab]
    );

    return (
        <Paper sx={navBarStyles} square>
            <Tabs value={selectedTab} onChange={handleChange}>
                <Tab label="Home" {...a11yProps(0)} />
                <Tab label="Characters" {...a11yProps(1)} />
            </Tabs>
        </Paper>
    );
};
