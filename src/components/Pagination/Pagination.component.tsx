import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MuiPagination from '@mui/material/Pagination';

import { setCurrentPageToLocalStorage } from 'utils/localStorage.utils';
import { ROUTE_LIST } from 'router/config';

/**
 * Extended MUI pagination component.
 *
 * @component
 */
export const Pagination = ({
    totalPages,
    currentPage,
    onPageChange,
}: {
    totalPages: number;
    currentPage: number;
    onPageChange: (value: number) => void;
}) => {
    const navigate = useNavigate();
    const [page, setPage] = useState(isNaN(currentPage) ? 1 : currentPage);

    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
        setCurrentPageToLocalStorage(String(value));
        onPageChange(value);
        navigate(ROUTE_LIST.characters.replace(':page', String(value)));
    };

    useEffect(() => {
        setPage(currentPage);
    }, [currentPage]);

    return (
        <MuiPagination count={totalPages} page={page} onChange={handleChange} />
    );
};
