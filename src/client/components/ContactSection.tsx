/** @format */

import { imgMeSideProfile } from '@@assets/images';
import useInView from '@@hooks/useInView';
import useWindowCheck from '@@hooks/useWindowCheck';
import { ANCHOR_TAG, CSS_GLOBAL_CLASS_NAME, MY_INFO } from '@@lib/constants';
import { APP_ENDPOINT, EXTERNAL_ENDPOINT } from '@@lib/constants/routes/api';
import { Avatar } from '@mui/material';
import clsx from 'clsx';
import { FormikErrors, useFormik } from 'formik';
import Script from 'next/script';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import z from 'zod';
import { MuiBox, MuiCheckbox, MuiFormControl, MuiFormControlLabel } from '..';
import SocialMediaLinks from './SocialMediaLinks';
import BodyContainer from './layouts/BodyContainer';
import BackgroundGradient from './ui/BackgroundGradient';
import Button from './ui/Button';
import FormInput from './ui/FormInput';
import Heading from './ui/Heading';
import Image from './ui/Image';

import styles from './ContactSection.module.scss';

const reCaptchaCallbackName = 'handleSubmit';
const FORM_STATUS = {
    SUCCESS: 'success',
    VERIFYING: 'verifying...',
    BLOCKED: 'blocked',
    ERROR: 'error',
} as const;

// TODO: fix submit btn message on submit attempts
// TODO: add form validation
const ContactSection = () => {
    const [isEmailChecked, setIsEmailChecked] = useState(true);
    const [isPhoneChecked, setIsPhoneChecked] = useState(false);
    const [hasOneContactChecked, setHasOneContactChecked] = useState(
        isEmailChecked || isPhoneChecked,
    );
    const [isFetching, setIsFetching] = useState(false);
    const { ref, inView } = useInView();
    useWindowCheck({
        handleEffect: () => {
            if (inView) {
                const hjFeedbackContainer = document.querySelectorAll(
                    '._hj_feedback_container',
                );
                hjFeedbackContainer.forEach((container) => {
                    // eslint-disable-next-line no-param-reassign
                    (container as HTMLElement).style.opacity = '1';
                });
            }
        },
    });
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
        initialStatus: '',
        validateOnBlur: true,
        validateOnChange: true,
        validateOnMount: false,
        validate: (values) => {
            const errors = {} as FormikErrors<typeof values>;
            const getIsRequiredMsg = (field: string) =>
                `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            const getIsInvalidMsg = (field: string) => `Invalid ${field.toLowerCase()}`;
            const stringSchema = z.string();

            if (isEmailChecked) {
                const { success } = stringSchema.email().safeParse(values.email);
                const field = 'Email address';
                if (!values.email) {
                    errors.email = getIsRequiredMsg(field);
                } else if (!success) {
                    errors.email = getIsInvalidMsg(field);
                }
            }
            if (isPhoneChecked) {
                const phoneRegex = /^(\+)?\d{7,15}(-\d+)*$/;
                const { success } = stringSchema
                    .regex(phoneRegex)
                    .safeParse(values.phone);
                const field = 'Phone number';
                if (!values.phone) {
                    errors.phone = getIsRequiredMsg(field);
                } else if (!success) {
                    errors.phone = getIsInvalidMsg(field);
                }
            }
            const fieldFirstName = 'First name';
            const fieldLastName = 'Last name';
            const fieldMessage = 'Message';
            if (!values.firstName) {
                errors.firstName = getIsRequiredMsg(fieldFirstName);
            }
            if (!values.lastName) {
                errors.lastName = getIsRequiredMsg(fieldLastName);
            }
            if (!values.message) {
                errors.message = getIsRequiredMsg(fieldMessage);
            }
            if (!stringSchema.min(15).safeParse(values.message).success) {
                errors.message = `${fieldMessage} is too short`;
            }

            return errors;
        },
        onSubmit: async (values, actions) => {
            try {
                actions.setSubmitting(true);
                setIsFetching(true);
                const body = JSON.stringify(values);
                const result = await fetch(EXTERNAL_ENDPOINT.FORMSPREE, {
                    method: 'POST',
                    body,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
                if (result.ok) {
                    await result.json();
                    actions.resetForm();
                    actions.setStatus(FORM_STATUS.SUCCESS);
                } else {
                    actions.setStatus(FORM_STATUS.ERROR);
                }
            } catch (error) {
                console.error(error);
                actions.setStatus(FORM_STATUS.ERROR);
            } finally {
                actions.setSubmitting(false);
                setIsFetching(false);
            }
        },
    });
    useWindowCheck({
        handleEffect: () => {
            window[reCaptchaCallbackName] = async (token: unknown) => {
                try {
                    setIsFetching(true);
                    formik.setStatus(FORM_STATUS.VERIFYING);
                    const result = await fetch(APP_ENDPOINT.BASE.RECAPTCHA, {
                        method: 'POST',
                        body: JSON.stringify({ token }),
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                    });
                    const data = await result.json();
                    const ACCEPTABLE_THRESHOLD = 0.5;
                    // score of 1.0 is most likely human
                    if (data.success && data.score >= ACCEPTABLE_THRESHOLD) {
                        formik.submitForm();
                    } else if (data.success && data.score < ACCEPTABLE_THRESHOLD) {
                        formik.setStatus(FORM_STATUS.BLOCKED);
                    } else {
                        formik.setStatus(FORM_STATUS.ERROR);
                    }
                } catch (err) {
                    console.error(err);
                    formik.setStatus(FORM_STATUS.ERROR);
                } finally {
                    setIsFetching(false);
                }
            };
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

    useEffect(() => {
        if (!isFetching && formik.status === FORM_STATUS.VERIFYING) {
            formik.setStatus('');
        }
    }, [isFetching, formik]);

    return (
        <MuiBox
            className={clsx(CSS_GLOBAL_CLASS_NAME.THEME_BG, styles.contact)}
            ref={ref}
        >
            <BodyContainer>
                <Heading
                    id={ANCHOR_TAG.APP.CONTACT}
                    subHeading='Contact Form'
                    heading="Let's Chat"
                />
            </BodyContainer>
            <BackgroundGradient className={styles.contact__container}>
                <div className={styles.contact__info}>
                    <Avatar className={styles.contact__photo}>
                        <Image
                            src={imgMeSideProfile}
                            alt='Profile picture of Darnell Noel'
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
                            className={clsx('g-recaptcha', styles.contact__submit_btn)}
                            type='submit'
                            disabled={
                                !hasOneContactChecked ||
                                formik.status === 'blocked' ||
                                formik.status === 'success'
                            }
                            data-sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY_V3}
                            data-callback={reCaptchaCallbackName}
                            data-action='submit'
                            data-badge='inline'
                        >
                            {formik.status || 'Send Message'}
                        </Button>
                    </MuiFormControl>
                    {/* eslint-enable react/jsx-props-no-spreading */}
                </div>
            </BackgroundGradient>
            {/* only load scripts when user has scrolled to at least contact section */}
            {inView && <Script src='https://www.google.com/recaptcha/api.js' />}
        </MuiBox>
    );
};

export default ContactSection;
