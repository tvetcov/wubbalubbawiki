import { useEffect, useState } from 'react';

import { Skeleton } from '@mui/material';

import { loadImg } from './Img.utils';

/**
 * Lazy load image loading component.
 * Renders a MUI skeleton when loading.
 *
 * @component
 */
export const Img = ({
    src,
    alt = 'custom image',
    size = 248,
}: {
    src: string;
    alt?: string;
    size?: number;
}) => {
    const [source, setSource] = useState('');
    useEffect(() => {
        const load = async () => {
            await loadImg(src).then((src) => {
                setSource(src);
            });
        };
        void load();
    }, [source, setSource]);

    return source ? (
        <img src={source} alt={alt} />
    ) : (
        <Skeleton variant="rectangular" height={size} width={size} />
    );
};
