/** @format */

import { profilePic } from '@@assets/images';
import { ANCHOR_TAG } from '@@lib/constants/routes/urls';
import { Avatar } from '@mui/material';
import { useFormik } from 'formik';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MuiCheckbox, MuiFormControl, MuiFormControlLabel, MuiTextField } from '..';
import styles from './ContactSection.module.scss';
import SocialMediaLinks from './SocialMediaLinks';
import BackgroundGradient from './ui/BackgroundGradient';
import Button from './ui/Button';
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
        onSubmit: (values, actions) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }, 1000);
        },
    });
    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        setChecked: Dispatch<SetStateAction<boolean>>,
    ) => {
        setChecked(event.target.checked);
    };

    return (
        <div className={styles.contact}>
            <Heading
                id={ANCHOR_TAG.APP.CONTACT}
                subHeading='Contact Me'
                heading="Let's Chat"
            />
            <BackgroundGradient className={styles.contact__container}>
                <div className={styles.contact__info}>
                    <Avatar className={styles.contact__photo}>
                        <Image
                            src={profilePic}
                            alt='Profile picture of Darnell Noel'
                            fill
                        />
                    </Avatar>
                    <h3>Contact Information</h3>
                    <p>
                        Send an email and I&apos;ll get back to you as soon as possible!
                    </p>
                    <div>Phone: xxx-xxxx</div>
                    <div>Email: xxxx@mail.com</div>
                    <SocialMediaLinks />
                </div>
                <div className={styles.contact__form_container}>
                    <MuiFormControl component='form' onSubmit={formik.handleSubmit}>
                        <MuiTextField
                            type='text'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            variant='filled'
                            id='first-name'
                            name='firstName'
                            label='First Name'
                        />
                        {formik.errors.firstName && (
                            <div id='feedback'>{formik.errors.firstName}</div>
                        )}
                        <MuiTextField
                            type='text'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            variant='filled'
                            id='last-name'
                            name='lastName'
                            label='Last Name'
                        />
                        {formik.errors.lastName && (
                            <div id='feedback'>{formik.errors.lastName}</div>
                        )}
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
                                label='Email Contact'
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
                                label='Phone Contact'
                            />
                        </div>
                        {isEmailChecked && (
                            <>
                                <MuiTextField
                                    type='text'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    variant='filled'
                                    id='email'
                                    name='email'
                                    label='Email'
                                />
                                {formik.errors.email && (
                                    <div id='feedback'>{formik.errors.email}</div>
                                )}
                            </>
                        )}
                        {isPhoneChecked && (
                            <>
                                <MuiTextField
                                    type='text'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                    variant='filled'
                                    id='phone'
                                    name='phone'
                                    label='Phone'
                                />
                                {formik.errors.phone && (
                                    <div id='feedback'>{formik.errors.phone}</div>
                                )}
                            </>
                        )}
                        <MuiTextField
                            multiline
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                            variant='filled'
                            id='message'
                            name='message'
                            label='Message'
                        />
                        {formik.errors.message && (
                            <div id='feedback'>{formik.errors.message}</div>
                        )}
                        <Button
                            className={styles.contact__submit_btn}
                            type='submit'
                            disabled={!hasOneContactChecked}
                        >
                            Submit
                        </Button>
                    </MuiFormControl>
                </div>
            </BackgroundGradient>
        </div>
    );
};

export default ContactSection;
