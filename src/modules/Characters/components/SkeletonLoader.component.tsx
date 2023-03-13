import Grid from '@mui/material/Grid';
import MuiSkeleton from '@mui/material/Skeleton';

/**
 * Skeleton preloader component made specifically to be rendered during
 * initial character loading process.
 *
 * @component
 */
export const SkeletonLoader = ({ count = 20 }: { count?: number }) => {
    return (
        <Grid container spacing={4}>
            {Array.from(Array(count).keys()).map((digit: number) => {
                return (
                    <Grid
                        key={digit}
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        role="character-skeleton-wrapper"
                    >
                        <MuiSkeleton variant="rectangular" height={200} />
                    </Grid>
                );
            })}
        </Grid>
    );
};
