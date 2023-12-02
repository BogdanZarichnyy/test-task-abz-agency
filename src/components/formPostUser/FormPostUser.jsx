import { Form, Formik } from 'formik';
import CustomInput from "./formElements/customInput/CustomInput";
import CustomTextInput from './formElements/customTextInput/CustomTextInput';
import CustomRadioButton from './formElements/customRadioButton/CustomRadioButton';
import CustomPhotoUploadInput from './formElements/customPhotoUploadInput/CustomPhotoUploadInput';
import Button from '../button/Button';

import yupSchema from '../../validation/yupSchema';

import scss from './FormPostUser.module.scss';

const initialDataForRegistrationUser = {
    name: '',
    email: '',
    phone: '',
    position_id: 1,
    photo: ''
}

const FormPostUser = () => {

    const handlerRegistrationUser = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
        // actions.resetForm();
    }

    return (
        <Formik 
            initialValues={initialDataForRegistrationUser} 
            onSubmit={handlerRegistrationUser} 
            validateOnMount={true} 
            validationSchema={yupSchema}
        >
        {(props) => {
            const { values, errors, handleChange, setFieldTouched, setFieldValue } = props;
            const isDisableSubmit = 
                !errors.name & !!values.name &
                !errors.email & !!values.email & 
                !errors.phone & !!values.phone &
                !errors.position_id & !!values.position_id &
                !!values.photo;

            return (
                <Form className={scss.form}>

                    <CustomInput name="name" label="Your name" 
                        CustomComponent={CustomTextInput} 
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    <CustomInput name="email" label="Email" 
                        type="email"
                        CustomComponent={CustomTextInput} 
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    <CustomInput name="phone" label="Phone" 
                        type="tel"
                        CustomComponent={CustomTextInput} 
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    <CustomInput name="position_id" label="Select your position"
                        type="radio"
                        styleLabel={scss.labelInputRadioBox} 
                        CustomComponent={CustomRadioButton} 
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    <CustomInput name="photo" label="Upload your photo"
                        type="file"
                        styleLabel={scss.labelInputPhotoUpload} 
                        CustomComponent={CustomPhotoUploadInput} 
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                        file={values.photo}
                    />

                    <Button styles={scss.buttonSubmit} text="Sign up" type="submit" disabled={!isDisableSubmit} />

                </Form>
            );
        }}
        </Formik>
    );
};

export default FormPostUser;