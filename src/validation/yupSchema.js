import * as Yup from 'yup';

const validFileExtensions = { image: ['jpg', 'jpeg'] };

const isValidFileType = (fileName, fileType) => {
    console.log(fileName.name);
    console.log(fileName.size);
    // return fileName && validFileExtensions[fileType].indexOf(fileName.toLowerCase().split('.').pop()) > -1;
}

const yupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Must be at least 2 characters")
        .max(60, "Must be at most 60 characters")
        .required("Your name is a required field"),
    email: Yup.string()
        .min(2, "Must be at least 2 characters")
        .max(100, "Must be at most 100 characters")
        .matches(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/, "Invalid e-mail")
        .required("E-name is a required field"),
    phone: Yup.string()
        .matches(/^[\+]{0,1}380([0-9]{9})$/, "+38 (XXX) XXX - XX - XX")
        .required("Phone number is a required field"),
    position_id: Yup.number()
        .min(1, "Must be at least 1 character")
        .required(),
    photo: Yup.mixed()
        .test("is-valid-type", "Not a valid image type - select image type *.jpg or .*jpeg",
            (filePhotoUser) => isValidFileType(filePhotoUser, "image"))
        // .test("is-valid-size", "The file must not exceed 5 MB", 
        //     (filePhotoUser, filePhotoUserInfo) => {
        //         console.log(filePhotoUser);
        //         console.log(filePhotoUserInfo);
        //         if (!filePhotoUser.length) return true;
        //         return filePhotoUser.size <= 50000000;
        //     })
        // .test({
        //     message: 'Please provide a supported file type',
        //     test: (file, context) => {
        //     console.log(file);
        //     console.log(context);
        //         // const isValid = ['png', 'pdf'].includes(getExtension(file?.name));
        //         // if (!isValid) context?.createError();
        //         // return isValid;
        //     }
        //   })
        .required('Photo is required')
});

export default yupSchema;