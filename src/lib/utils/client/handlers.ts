/** @format */

import { Dispatch, SetStateAction } from 'react';

const handleMouseEvent =
    (state: SetStateAction<boolean>) =>
    (setState: Dispatch<SetStateAction<boolean>>) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState(state);
    };

export const toggleDrawer = handleMouseEvent((prev) => !prev);

export const closeDrawer = handleMouseEvent(false);
