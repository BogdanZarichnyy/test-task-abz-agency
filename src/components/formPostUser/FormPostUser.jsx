import { useEffect, useState, useMemo } from 'react';
import { Form, Formik } from 'formik';
import CustomInput from "./formElements/customInput/CustomInput";
import CustomTextInput from './formElements/customTextInput/CustomTextInput';
import CustomRadioButton from './formElements/customRadioButton/CustomRadioButton';
import Button from '../button/Button';

// import { getPositions } from '../../api/fetching';
// import { usePositionsUsers } from '../../hooks/usePositionsUsers';

import yupSchema from '../../validation/yupSchema';

import scss from './FormPostUser.module.scss';

const initialDataForRegistrationUser = {
    name: '',
    email: '',
    phone: '',
    position_id: 0,
    photo: null
}

const FormPostUser = () => {
    // const [positions, setPositions] = useState([]);

    // console.log(positions);
    // console.log(setPositions);

    // const positionsUsers = useMemo(() => getPositions(setPositions), []);
    // usePositionsUsers(setPositions);

    // useEffect(() => {
    //     getPositions(setPositions);
    // }, []);

    const handlerRegistrationUser = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
        actions.resetForm();
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
                !errors.phone & !!values.phone  
                // !errors.position_id & !!values.position_id 
                // & !!values.photo;

            return (
                <Form className={scss.form}>

                    <CustomInput name="name" label="Your name" 
                        CustomComponent={CustomTextInput} 
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    <CustomInput name="email" label="Email" 
                        CustomComponent={CustomTextInput} 
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    <CustomInput name="phone" label="Phone" 
                        CustomComponent={CustomTextInput} 
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    <CustomInput name="position_id" label="Select your position"
                        // styleLabel={scss.labelInputArea}
                        // stylesInput={scss.inputArea} 
                        // positions={positions}
                        CustomComponent={CustomRadioButton} 
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    {/* <CustomInput name="description" label="Description"
                        as='textarea'
                        styleLabel={scss.labelInputArea}
                        stylesInput={scss.inputArea} 
                        CustomComponent={CustomTextInput} 
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    <CustomInput name="date" label="Select date" 
                        CustomComponent={CustomDatePicker} 
                        values={values}
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                        placeholder='Select Date'
                    />

                    <CustomInput name="time" label="Select time" 
                        CustomComponent={CustomTimePicker} 
                        values={values}
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        placeholder='Select Time'
                    />

                    <CustomInput name="location" label="Location"
                        CustomComponent={CustomTextInput} 
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />
                    
                    <CustomInput name="category" label="Category"
                        CustomComponent={CustomSelectInput} 
                        options={categoryOptions}
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        values={values.category}
                        placeholder='Select Category'
                    />

                    <CustomInput name="picture" label="Add picture"
                        CustomComponent={CustomTextInput} 
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    <CustomInput name="priority" label="Priority"
                        CustomComponent={CustomSelectInput} 
                        options={priorityOptions}
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        values={values.priority}
                        placeholder='Select Priority'
                    /> */}

                    <Button styles={scss.buttonSubmit} text="Sign up" type="submit" disabled={!isDisableSubmit} />

                </Form>
            );
        }}
        </Formik>
    );
};

export default FormPostUser;