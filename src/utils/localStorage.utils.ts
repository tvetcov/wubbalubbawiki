const PERSISTED_PAGE_KEY = 'currentPage';

/**
 * Sets given page value to localstorage.
 * @param {string} page - The title of the book.
 */
export const setCurrentPageToLocalStorage = (page: string) => {
    localStorage.setItem(PERSISTED_PAGE_KEY, page);
};

/**
 * Gets current page value from localstorage.
 */
export const getCurrentPageFromLocalStorage = (): string => {
    return localStorage.getItem(PERSISTED_PAGE_KEY) || '1';
};
