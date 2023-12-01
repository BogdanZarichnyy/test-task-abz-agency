import { useField } from 'formik';

import scss from './CustomInput.module.scss';

const CustomInput = ({ label, styleLabel, CustomComponent, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <label className={[scss.labelInput, styleLabel].join(" ")} htmlFor={props.name}>
            <CustomComponent {...field} {...meta} {...props} >
                <span className={scss.textLabel}>{label}</span>
            </CustomComponent>
        </label>
    );
};
export default CustomInput;