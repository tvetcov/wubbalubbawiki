import { SyntheticEvent, useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { NAV_TABS } from './NavBar.types';
import { NAV_BAR_PATH_MAP } from './navBar.utils';
import { getCurrentPageFromLocalStorage } from 'utils/localStorage.utils';

export const useNavBar = (): {
    handleChange: (e: SyntheticEvent, value: number) => void;
    selectedTab: NAV_TABS;
} => {
    const { pathname } = useLocation();
    const defaultActiveTab = pathname.includes('characters')
        ? NAV_TABS.characters
        : NAV_TABS.home;
    const [selectedTab, setSelectedTab] = useState(defaultActiveTab);
    const navigate = useNavigate();
    const currentPage = getCurrentPageFromLocalStorage();

    const handleChange = useCallback(
        (_: SyntheticEvent, newValue: number) => {
            const navigatePath =
                newValue === 0
                    ? NAV_BAR_PATH_MAP[newValue]
                    : NAV_BAR_PATH_MAP[newValue].replace(':page', currentPage);

            setSelectedTab(newValue);
            navigate(navigatePath);
        },
        [selectedTab]
    );

    return { handleChange, selectedTab };
};
