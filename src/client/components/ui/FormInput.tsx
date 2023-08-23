/** @format */

import { MuiTextField } from '@@client';
import { ComponentProps } from 'react';
import styles from './FormInput.module.scss';

type TName = string;

interface IProps {
    name: TName;
    value: { [key: TName]: string };
    error: { [key: TName]: string };
    handleChange: ComponentProps<typeof MuiTextField>['onChange'];
    handleBlur: ComponentProps<typeof MuiTextField>['onBlur'];
    textFieldProps?: ComponentProps<typeof MuiTextField>;
}

const FormInput = ({
    name,
    value,
    error,
    handleChange,
    handleBlur,
    textFieldProps,
}: IProps) => {
    const nameParts = name.split(/(?=[A-Z][a-z])/);
    const nameWithHyphen = nameParts.join('-').toLowerCase();
    const nameWithSpace = nameParts
        .map((part) => {
            const [firstLetter, ...rest] = part;
            return firstLetter.toUpperCase() + rest.join('');
        })
        .join(' ');

    return (
        <>
            <MuiTextField
                className={styles.input__field}
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={value[name]}
                variant='filled'
                id={nameWithHyphen}
                name={name}
                label={nameWithSpace}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...textFieldProps}
            />
            {!!error[name] && <div id='feedback'>{error[name]}</div>}
        </>
    );
};

export default FormInput;
