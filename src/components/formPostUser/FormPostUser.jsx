import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import CustomInput from "./formElements/customInput/CustomInput";
import CustomTextInput from './formElements/customTextInput/CustomTextInput';
import CustomRadioButton from './formElements/customRadioButton/CustomRadioButton';
import CustomPhotoUploadInput from './formElements/customPhotoUploadInput/CustomPhotoUploadInput';
import Button from '../button/Button';

import yupSchema from '../../validation/yupSchema';

import { useDispatch } from 'react-redux';
import { postUserThunk } from '../../redux/thunks/usersThunk';
import { setPage } from '../../redux/slices/usersSlice';

// import { postAddUser } from '../../api/fetching';

import scss from './FormPostUser.module.scss';

const initialDataForRegistrationUser = {
    name: '',
    email: '',
    phone: '',
    position_id: 1,
    photo: undefined
}

const FormPostUser = ({ setIsSuccessfullyRegistered }) => {
    const dispatch = useDispatch();

    const handlerRegistrationUser = (values, actions) => {
        const formData = new FormData();
        formData.append('position_id', values.position_id);
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('photo', values.photo);
        
        // postAddUser(formData, setIsSuccessfullyRegistered);

        dispatch(setPage(1));
        dispatch(postUserThunk({ formData, setIsSuccessfullyRegistered }));
        
        actions.setSubmitting(false);
        actions.resetForm(initialDataForRegistrationUser);
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
                        // setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    <CustomInput name="email" label="Email" 
                        type="email"
                        CustomComponent={CustomTextInput} 
                        // setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    <CustomInput name="phone" label="Phone" 
                        type="tel"
                        CustomComponent={CustomTextInput} 
                        // setFieldValue={setFieldValue}
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
                        // file={values.photo}
                    />

                    <Button styles={scss.buttonSubmit} text="Sign up" type="submit" disabled={!isDisableSubmit} />

                </Form>
            );
        }}
        </Formik>
    );
};

export default FormPostUser;

FormPostUser.propTypes = {
    setIsSuccessfullyRegistered: PropTypes.func
};