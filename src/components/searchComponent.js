import React, { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchComponent = () =>{
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  useEffect(() =>{
    console.log(radioValue);
  },[radioValue, setRadioValue]);
  const radios = [
    { name: 'Persona', value: '1' },
    { name: 'Empresa', value: '2' },
    { name: 'Verificar Email', value: '3' },
  ];
    return (
    <div className='searchComponent_container'>
        <h2 className='h2Cust'>Localizador de emails</h2>
        <h3 className='h3Cust'>Encuentra cualquier correo electrónico. En cualquier lugar.</h3>
        <div className="searchComponent">
                <ButtonGroup className="searchComponent_container-Select">
                    {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-secondary ' : 'outline-secondary'}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                    {radio.name}
            </ToggleButton>
            ))}
            </ButtonGroup>
            {radioValue == 1 &&
            <InputGroup className="mb-3 input-group">
                <InputGroup.Text>First and last name</InputGroup.Text>
                <Form.Control aria-label="First name" />
                <Form.Control aria-label="Last name" />
            </InputGroup>
            }
            {radioValue == 2 &&
            <InputGroup className="mb-3 input-group">
                <InputGroup.Text>First and domain</InputGroup.Text>
                <Form.Control aria-label="First name" />
                <Form.Control aria-label="Last name" placeholder='(optional)'/>
            </InputGroup>
            }
            {radioValue == 3 &&
            <InputGroup className="mb-3 input-group">
                <InputGroup.Text>First and domain</InputGroup.Text>
                <Form.Control aria-label="First name" />
                <Form.Control aria-label="Last name" placeholder='(optional)'/>
            </InputGroup>
            }  
        </div>

    </div>
    
    )

}
export default SearchComponent;