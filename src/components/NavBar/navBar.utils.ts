import { ROUTE_LIST } from 'router/config';

/**
 * Util function to pass props to tabs.
 * Took from official MUI doc.
 * @param {number} index - Tab component index.
 */
export function a11yProps(index: number): Record<string, string> {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const NAV_BAR_PATH_MAP: Record<number, string> = {
    0: ROUTE_LIST.home,
    1: ROUTE_LIST.characters,
};
