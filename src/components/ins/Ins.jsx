import Styles from './Ins.module.css';
import React, { useState } from 'react';

export const Ins = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);

    // Lógica para cambiar el tipo de entrada según la opción seleccionada
    if (value === 'option1') {
      setInputValue(''); // Restablecer el valor del input cuando se selecciona 'option1'
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={Styles.pruebasss}>
    <label htmlFor="mainSelect">Selecciona una opción:</label>
    <select id="mainSelect" value={selectedOption} onChange={handleSelectChange}>
      <option value="">Selecciona...</option>
      <option value="option1">Opción 1</option>
      <option value="option2">Opción 2</option>
    </select>

    {/* Mostrar un input normal a menos que se seleccione 'option1' */}
    {selectedOption !== 'option1' ? (
      <div>
        <label htmlFor="inputField">Ingresa un valor:</label>
        <input
          type="text"
          id="inputField"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    ) : (
      <div>
        <label htmlFor="dependentSelect">Selecciona una opción adicional:</label>
        <select id="dependentSelect">
          <option value="subOption1">Sub-Opción 1</option>
          <option value="subOption2">Sub-Opción 2</option>
        </select>
      </div>
    )}
  </div>



  )
}
