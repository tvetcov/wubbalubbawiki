import { useEffect, useState } from 'react';

import { Skeleton } from '@mui/material';

const loadImg = (src: string): Promise<string> =>
    new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = () => reject(new Error('could not load image'));
    });

export const Img = ({
    src,
    alt = 'custom image',
}: {
    src: string;
    alt?: string;
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
        <Skeleton variant="rectangular" height={248} width={248} />
    );
};
