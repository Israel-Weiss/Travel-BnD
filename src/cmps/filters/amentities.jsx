import React, { useState } from 'react';
import styled from 'styled-components';

const checkboxesListEssentials = [
    "TV",
    "Internet",
    "Wifi",
    "Air conditioning",
    "Wheelchair accessible",
    "Pool",
    "Kitchen",
    "Smoking allowed"
]
const checkboxesListFeateures = [
    "Hot tub",
    "Heating",
    "Crib",
    "Microwave",
    "Coffee maker",
    "Dinner"
]

const getDefaultCheckboxesEssentials = () =>
checkboxesListEssentials.map(checkbox => ({
        name: checkbox,
        checked: false,
    }));

export function useCheckboxesEssentials(defaultCheckboxes) {
    const [checkboxes, setCheckboxes] = useState(
        defaultCheckboxes || getDefaultCheckboxesEssentials(),
    );
    function setCheckbox(index, checked) {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index].checked = checked;
        setCheckboxes(newCheckboxes);
    }
    return {
        setCheckbox,
        checkboxes,
    };
}

const getDefaultCheckboxesFeateures = () =>
checkboxesListEssentials.map(checkbox => ({
        name: checkbox,
        checked: false,
    }));
export function useCheckboxesFeateures(defaultCheckboxes) {
    const [checkboxes, setCheckboxes] = useState(
        defaultCheckboxes || getDefaultCheckboxesFeateures(),
    );
    function setCheckbox(index, checked) {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index].checked = checked;
        setCheckboxes(newCheckboxes);
    }
    return {
        setCheckbox,
        checkboxes,
    };
}

const Checkbox = styled.input`
    margin: 0px 10px 0px !important;
    cursor: pointer;
  `;
const CheckboxLabel = styled.label`
    cursor: pointer;
    display: block;
    font-weight: normal;
  `;
export function Checkboxes({ checkboxes, setCheckbox }) {
    return (
        <>
            {checkboxes.map((checkbox, i) => (
                <CheckboxLabel>
                    <Checkbox
                        type="checkbox"
                        checked={checkbox.checked}
                        onChange={e => {
                            setCheckbox(i, e.target.checked);
                        }}
                    />
                    {checkbox.name}
                </CheckboxLabel>
            ))}
        </>
    );
}
export function CheckboxesRadioEmenteties() {
    const checkboxesEssentials = useCheckboxesEssentials();
    const checkboxesFeateures = useCheckboxesFeateures();


    return (
        <div className='check-boxes-amenteties'>
            <span className='essentials'>Essentials</span>
            <Checkboxes {...checkboxesEssentials} />
            <span className='features'>Features</span>
            <Checkboxes {...checkboxesFeateures} />
            {/* <span>
          Value:
          {checkboxes.checkboxes
            .filter(t => t.checked)
            .map(checkbox => checkbox.name)
            .join(', ')}
        </span> */}
        </div>
    );
}
