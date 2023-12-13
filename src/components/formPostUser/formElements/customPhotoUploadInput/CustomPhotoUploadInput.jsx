import { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

import scss from './CustomPhotoUploadInput.module.scss';

const extensionsForPhotoUser = [ '.jpeg', '.jpg' ];

const CustomPhotoUploadInput = ({ children, as = 'input', setFieldValue, error, touched, type, name }) => {
    const labelForCustomPhotoUploadInput = children.props.children;
    const [textInfoForPhotoUploadAction, setTextInfoForPhotoUploadAction] = useState(labelForCustomPhotoUploadInput);

    // const [preview, setPreview] = useState(null);
    // const [photo, setPhoto] = useState(undefined);

    // if (!!file) {
    //     // console.log(file);
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => {
    //         setPreview(reader.result);
    //     };
    // }

    // console.log(file);
    
    return (
        <>
            <Field as={as}
                onChange={async (event) => {
                    await setFieldValue(name, event.target.files[0])
                    // setPhoto(event.target.files[0]);
                    setTextInfoForPhotoUploadAction(event.target.files[0].name);
                }}
                className={scss.customPhotoUploadInput} 
                type={type} name={name} id={name}
                accept={extensionsForPhotoUser.join(',')}
                value={undefined}
            />
             
            <span className={[scss.uploadButton, error && touched && scss.isErrorUploadButton].join(" ")}>
                Upload
            </span>
            <span className={[scss.uploadTextInfo, error && touched && scss.isErrorUploadTextInfo].join(" ")} 
                title={textInfoForPhotoUploadAction}
            >
                {textInfoForPhotoUploadAction}
            </span>

            <ErrorMessage className={[scss.errorFeedback, error && touched && scss.isErrorFeedback].join(" ")} 
                name={name} 
                component="span" 
            />
            
            {/* {!!preview && <img className={scss.previewPhoto} src={preview} alt="preview" width="200px" />} */}
        </>
    );
};

export default CustomPhotoUploadInput;

CustomPhotoUploadInput.propTypes = {
    children: PropTypes.object,
    as: PropTypes.string,
    setFieldValue: PropTypes.func,
    error: PropTypes.string,
    touched: PropTypes.bool,
    type: PropTypes.string,
    name: PropTypes.string,
    // file: PropTypes.object,
};