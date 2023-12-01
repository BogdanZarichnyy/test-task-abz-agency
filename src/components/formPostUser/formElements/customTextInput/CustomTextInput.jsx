import { Field, ErrorMessage } from 'formik';

import scss from './CustomTextInput.module.scss';

const CustomTextInput = ({ children, as = 'input', stylesInput, setFieldValue, setFieldTouched, handleChange, error, touched, type ='text', name, placeholder = ' ' }) => {
    return (
        <>
            <Field as={as}
                onChange={event => {
                    setFieldTouched(name);
                    handleChange(event);
                }}
                className={[scss.input, stylesInput, error && touched && scss.inputInvalid].join(" ")} 
                type={type} name={name} placeholder={placeholder} 
            />
            {children}
            {name === 'phone' && !touched && <span className={scss.phoneLabelExample}>+38 (XXX) XXX - XX - XX</span>}
            <ErrorMessage className={[scss.errorFeedback, error && touched && scss.isErrorFeedback].join(" ")} name={name} component="span" />
        </>
    );
};

export default CustomTextInput;