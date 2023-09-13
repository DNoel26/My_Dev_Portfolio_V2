/** @format */

import { MuiCloseIcon } from '@@components/icons';
import { ComponentProps } from 'react';
import Button from './Button';
import styles from './CloseButton.module.scss';

const CloseButton = (props: ComponentProps<typeof Button>) => {
    return (
        <Button
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            customVariant='text'
            endIcon={<MuiCloseIcon fontSize='large' />}
            className={styles.btn}
        >
            Close
        </Button>
    );
};

export default CloseButton;
