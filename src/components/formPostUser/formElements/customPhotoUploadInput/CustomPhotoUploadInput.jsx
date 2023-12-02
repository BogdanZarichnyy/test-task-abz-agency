import { useState } from 'react';
import { Field, ErrorMessage } from 'formik';

import scss from './CustomPhotoUploadInput.module.scss';

const extensionsForPhotoUser = [ '.jpeg', '.jpg' ];

const CustomPhotoUploadInput = ({ children, as = 'input', setFieldValue, setFieldTouched, handleChange, error, touched, type, name, file }) => {
    const labelForCustomPhotoUploadInput = children.props.children;
    const [textInfoForPhotoUploadAction, setTextInfoForPhotoUploadAction] = useState(labelForCustomPhotoUploadInput);
    const [preview, setPreview] = useState(null);

    if (!!file) {
        console.log(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPreview(reader.result);
        };
    }
    
    return (
        <>
            <Field as={as}
                onChange={async (event) => {
                    // console.log(event.target.files[0]);
                    await setFieldValue(name, event.target.files[0])
                    setTextInfoForPhotoUploadAction(event.target.files[0].name);
                    // setFieldTouched(name);
                    handleChange(event);
                }}
                className={scss.customPhotoUploadInput} 
                type={type} name={name} id={name}
                accept={extensionsForPhotoUser.join(',')}
            />
            <label className={scss.textLabel} htmlFor={name}>
                <span className={scss.labelButton}>Upload</span>
                <span className={scss.labelInfo}>{textInfoForPhotoUploadAction}</span>
            </label>
            <ErrorMessage className={[scss.errorFeedback, error && touched && scss.isErrorFeedback].join(" ")} name={name} component="span" />
            <div>
                <img src={preview} alt="preview" width="200px" />
            </div>
        </>
    );
};

export default CustomPhotoUploadInput;