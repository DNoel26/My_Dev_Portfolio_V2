/** @format */

import { useInView as useInViewRio } from 'react-intersection-observer';

const useInView = () => {
    const view = useInViewRio({
        threshold: 0.1,
        rootMargin: '-200px',
        triggerOnce: true,
    });
    return view;
};

export default useInView;
