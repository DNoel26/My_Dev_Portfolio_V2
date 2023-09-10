/** @format */

import useMediaQueryMui from '@mui/material/useMediaQuery';

type THookArgs = Parameters<typeof useMediaQueryMui>;

// eslint-disable-next-line arrow-body-style
const useMediaQuery = (...args: THookArgs) => {
    const [queryInput, options] = args;
    return useMediaQueryMui(queryInput, options);
};

export default useMediaQuery;
