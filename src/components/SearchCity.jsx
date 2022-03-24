import React from "react";
import Select from 'react-select'
import s from './SearchCity.module.css'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'street', label: 'street' }
]

const colourStyles = {
    control: (styles) => ({
        ...styles, 
        backgroundColor: '#2A2F45',
        width: '510px',
        color: '#8A91AB',
        borderRadius: '2px',
        border: 'none',
        margin: '80px auto 0px',
        cursor: 'text',
    }),
    option: (styles) => {
        console.log(styles);
        return {
        ...styles,
        backgroundColor: '#30354B',
        color: '#fff',
        width: '510px',
        position: 'relative',
        zIndex: '10'
    }},
    input: (styles) => ({ ...styles, color: '#8A91AB' }),
    menu: (styles) => ({
        width: '510px',
        height: '0px',
        margin: '0px auto',
    }),
    dropdownIndicator: (styles) => ({
        display: 'none'
    }),
    indicatorSeparator: (styles) => ({
        display: 'none'
    }),
    singleValue: (styles) => ({
        ...styles,
        color: '#fff'
    }),
    noOptionsMessage: (styles) => ({
        display: 'none'
    })
}

const SearchCity = () => {
    return(
        <Select
        isClearable
        options={options}
        styles={colourStyles}
        placeholder="Укажите город"
        filterOption={(option, inputValue) => {
            if (inputValue.length >= 3 && inputValue.toLowerCase() === option.label.toLowerCase().slice(0, inputValue.length)) {
                return option;
            }
            return null;
        }}
        />
    )
}

export default SearchCity;