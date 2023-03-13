/**
 * Creates an img loading Promise.
 * @param {string} src - img source.
 */
export const loadImg = (src: string): Promise<string> =>
    new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = () => reject(new Error('could not load image'));
    });
