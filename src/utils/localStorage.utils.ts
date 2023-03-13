const PERSISTED_PAGE_KEY = 'currentPage';

export const setCurrentPageToLocalStorage = (page: string) => {
    localStorage.setItem(PERSISTED_PAGE_KEY, page);
};

export const getCurrentPageFromLocalStorage = (): string => {
    return localStorage.getItem(PERSISTED_PAGE_KEY) || '1';
};
