import { useField } from 'formik';

import scss from './CustomInput.module.scss';

const CustomInput = ({ label, styleLabel, CustomComponent, ...props }) => {
    const [field, meta] = useField(props);
    // const {value, ...rest} = field;

    return (
        <label className={[scss.labelInput, styleLabel].join(" ")} htmlFor={props.name}>
            <CustomComponent {...field} {...meta} {...props} 
                // {...rest} 
            >
                <span className={scss.textLabel}>{label}</span>
            </CustomComponent>
        </label>
    );
};
export default CustomInput;