import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import { getPositions } from '../../../../api/fetching';

import scss from './CustomRadioButton.module.scss';

const CustomRadioButton = ({ children, as = 'input', setFieldTouched, handleChange, type, name }) => {
    const [positions, setPositions] = useState([]);
    const [idOptionsForPositionChecked, setIdOptionsForPositionChecked] = useState(1);

    const textLabelForRadioBox = children.props.children;

    useEffect(() => {
        getPositions(setPositions);
    }, []);

    return (
        <div className={scss.customRadioButtons} >

            <p className={scss.positionTitle}>{textLabelForRadioBox}</p>

            <div className={scss.positions} role="group">
                {!!positions.length && positions.map((position) => 
                    <label className={scss.optionsInput} key={position.id}>
                        <Field as={as}
                            onChange={event => {
                                setFieldTouched(name);
                                handleChange(event);
                                setIdOptionsForPositionChecked(position.id);
                            }}
                            className={scss.radioBox} 
                            type={type} name={name} 
                            value={position.id}
                            checked={position.id === idOptionsForPositionChecked ? true : false}
                        />
                        <span className={scss.radioButton}></span>
                        <span className={scss.labelOptionInput}>{position.name}</span>
                    </label>
                )}
            </div>

        </div>
    )
}

export default CustomRadioButton;

CustomRadioButton.propTypes = {
    children: PropTypes.object,
    as: PropTypes.string,
    setFieldTouched: PropTypes.func,
    handleChange: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
};