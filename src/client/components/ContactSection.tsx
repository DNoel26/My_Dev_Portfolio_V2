/** @format */

import { imgMeSideProfile } from '@@assets/images';
import { ANCHOR_TAG, CSS_GLOBAL_CLASS_NAME, MY_INFO } from '@@lib/constants';
import { EXTERNAL_ENDPOINT } from '@@lib/constants/routes/api';
import { Avatar } from '@mui/material';
import clsx from 'clsx';
import { useFormik } from 'formik';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MuiBox, MuiCheckbox, MuiFormControl, MuiFormControlLabel } from '..';
import styles from './ContactSection.module.scss';
import SocialMediaLinks from './SocialMediaLinks';
import BackgroundGradient from './ui/BackgroundGradient';
import Button from './ui/Button';
import FormInput from './ui/FormInput';
import Heading from './ui/Heading';
import Image from './ui/Image';

const ContactSection = () => {
    const [isEmailChecked, setIsEmailChecked] = useState(true);
    const [isPhoneChecked, setIsPhoneChecked] = useState(false);
    const [hasOneContactChecked, setHasOneContactChecked] = useState(
        isEmailChecked || isPhoneChecked,
    );
    useEffect(() => {
        if (isEmailChecked || isPhoneChecked) {
            setHasOneContactChecked(true);
        } else {
            setHasOneContactChecked(false);
        }
    }, [isEmailChecked, isPhoneChecked, setHasOneContactChecked]);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        },
        // validationSchema: ,
        onSubmit: async (values, actions) => {
            actions.setSubmitting(true);
            try {
                const body = JSON.stringify(values);
                await fetch(EXTERNAL_ENDPOINT.FORMSPREE, {
                    method: 'POST',
                    body,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
                actions.resetForm();
            } catch (error) {
                console.error(error);
            } finally {
                actions.setSubmitting(false);
            }
        },
    });
    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        setChecked: Dispatch<SetStateAction<boolean>>,
    ) => {
        setChecked(event.target.checked);
    };
    const formInputProps = {
        handleChange: formik.handleChange,
        handleBlur: formik.handleBlur,
        value: formik.values,
        error: formik.errors,
    };

    return (
        <MuiBox className={clsx(CSS_GLOBAL_CLASS_NAME.THEME_BG, styles.contact)}>
            <Heading
                id={ANCHOR_TAG.APP.CONTACT}
                subHeading='Contact Form'
                heading="Let's Chat"
            />
            <BackgroundGradient className={styles.contact__container}>
                <div className={styles.contact__info}>
                    <Avatar className={styles.contact__photo}>
                        <Image
                            src={imgMeSideProfile}
                            alt='Profile picture of Darnell Noel'
                            fill
                        />
                    </Avatar>
                    <h3>Contact Information</h3>
                    <p>
                        Send a message and I&apos;ll get back to you as soon as possible!
                    </p>
                    <div>
                        <div>Phone: {MY_INFO.PHONE}</div>
                        <div>Email: {MY_INFO.EMAIL}</div>
                    </div>
                    <SocialMediaLinks monochromeColor='white' />
                </div>
                <div className={styles.contact__form_container}>
                    {/* eslint-disable react/jsx-props-no-spreading */}
                    <MuiFormControl component='form' onSubmit={formik.handleSubmit}>
                        <FormInput name='firstName' {...formInputProps} />
                        <FormInput name='lastName' {...formInputProps} />
                        <div className={styles.contact__checkbox_container}>
                            <MuiFormControlLabel
                                control={
                                    <MuiCheckbox
                                        checked={isEmailChecked}
                                        onChange={(e) => {
                                            if (isEmailChecked && !isPhoneChecked) {
                                                return null;
                                            }
                                            return handleCheckboxChange(
                                                e,
                                                setIsEmailChecked,
                                            );
                                        }}
                                    />
                                }
                                label='Add Email'
                            />
                            <MuiFormControlLabel
                                control={
                                    <MuiCheckbox
                                        checked={isPhoneChecked}
                                        onChange={(e) => {
                                            if (isPhoneChecked && !isEmailChecked) {
                                                return null;
                                            }
                                            return handleCheckboxChange(
                                                e,
                                                setIsPhoneChecked,
                                            );
                                        }}
                                    />
                                }
                                label='Add Phone Number'
                            />
                        </div>
                        {isEmailChecked && <FormInput name='email' {...formInputProps} />}
                        {isPhoneChecked && <FormInput name='phone' {...formInputProps} />}
                        <FormInput
                            name='message'
                            {...formInputProps}
                            textFieldProps={{ multiline: true }}
                        />
                        <Button
                            className={styles.contact__submit_btn}
                            type='submit'
                            disabled={!hasOneContactChecked}
                        >
                            Send Message
                        </Button>
                    </MuiFormControl>
                    {/* eslint-enable react/jsx-props-no-spreading */}
                </div>
            </BackgroundGradient>
        </MuiBox>
    );
};

export default ContactSection;
