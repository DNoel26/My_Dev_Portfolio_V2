/** @format */

import { ACTION_USER_THEME } from '@@actions/userThemeActions';
import { MuiButton, MuiIconButton, MuiSnackbar } from '@@client';
import {  useUserThemeContext } from '@@context/UserThemeContext';
import {  useEffect, useState } from 'react';
import { MuiCloseIcon } from './icons';

const defaultMessage = 'Personalize your experience!';

const ColorThemeToast = () => {
    const { setIsOpenThemeEditor, userThemeState, userThemeDispatch } =
    useUserThemeContext();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(defaultMessage);
    useEffect(() => {
        if (userThemeState.message) {
            setMessage(userThemeState.message);
            setOpen(true);
            userThemeDispatch({ type: ACTION_USER_THEME.UPDATE_MESSAGE, payload: '' });
        }
    }, [userThemeState, userThemeDispatch]);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <>
            <MuiButton
                color='inherit'
                size='small'
                sx={{ textTransform: 'unset' }}
                onClick={(e) => {
                    setIsOpenThemeEditor(true);
                    handleClose(e);
                }}
            >
                Change Colors
            </MuiButton>
            <MuiIconButton
                size='small'
                aria-label='close'
                color='inherit'
                onClick={handleClose}
            >
                <MuiCloseIcon fontSize='small' />
            </MuiIconButton>
        </>
    );

    return (
        <MuiSnackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message={message}
            action={action}
        />
    );
};

export default ColorThemeToast;
