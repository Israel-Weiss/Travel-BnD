import React, { useState } from 'react';
import styled from 'styled-components';

const checkboxesList = [
    'Entire Place',
    'Private Room',
    'Shared Room',
  ]
  const getDefaultCheckboxes = () =>
    checkboxesList.map(checkbox => ({
      name: checkbox,
      checked: false,
      value:checkbox
    }));
  export function useCheckboxes(defaultCheckboxes) {
    const [checkboxes, setCheckboxes] = useState(
      defaultCheckboxes || getDefaultCheckboxes(),
    );
    function setCheckbox(index, checked) {
      const newCheckboxes = [...checkboxes];
      newCheckboxes.map(box=>{
       box.checked=false
       
      })
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
  export function CheckboxRadio() {
    const checkboxes = useCheckboxes();
    return (
      <div className='check-boxes'>
        <Checkboxes {...checkboxes} />
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
  