import { useEffect, useState, useMemo } from 'react';
import { Field } from 'formik';

import { getPositions } from '../../../../api/fetching';

import { usePositionsUsers } from '../../../../hooks/usePositionsUsers';

import scss from './CustomRadioButton.module.scss';

const CustomRadioButton = ({ stylesInput, setFieldValue, setFieldTouched, handleChange, error, touched, name }) => {
    const [positions, setPositions] = useState([]);

    console.log(positions);

    usePositionsUsers(positions, setPositions);

    // const positionsUsers = usePositionsUsers(setPositions);

    // console.log(usePositionsUsers(setPositions));

    // useEffect(() => {
    //     getPositions(setPositions);
    // }, []);

    // const positionsUsers = useMemo(() => {
    //     getPositions(setPositions);
    // }, []);

    return (
        <>
            {/* {!!positionsUsers.length && positionsUsers.map((position) =>  */}
            {!!positions.length && positions.map((position) => 
                <Field key={position.id}
                    onChange={event => {
                        setFieldTouched(name);
                        handleChange(event);
                    }}
                    className={scss.radioButton} 
                    type="radio" name={name} 
                    // {...position.id === 1 && checked}
                >

                </Field>
            )}

            {/* <label>
                <input class="radio_box" type="radio" name="rd">
                <span class="radio_style"></span>
                radiobox
            </label>
            <label>
                <input class="radio_box" type="radio" name="rd" checked>
                <span class="radio_style"></span>
                radiobox checked
            </label>
            <label>
                <input class="radio_box" type="radio" name="rdb" disabled>
                <span class="radio_style"></span>
                radiobox disabled
            </label>
            <label>
                <input class="radio_box" type="radio" name="rdb" disabled checked>
                <span class="radio_style"></span>
                radiobox disabled checked
            </label> */}
        </>
    )
}

export default CustomRadioButton;