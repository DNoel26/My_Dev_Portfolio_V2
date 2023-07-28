/** @format */

import useScrollTriggerMui from '@mui/material/useScrollTrigger';

const useScrollTrigger = () => {
    const trigger = useScrollTriggerMui({
        disableHysteresis: true,
        threshold: 10,
    });
    return trigger;
};

export default useScrollTrigger;
