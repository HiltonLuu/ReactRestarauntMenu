import React, { useState } from 'react';
import { Allergies } from "./Allergies.js";
import './MultiSelect.css';
import Select from 'react-select';

const customStyles = {

    menu: (provided, state) => ({
      ...provided,
      width: '100%',
      color: '#FFF',
      background: '#000000',
      paddingTop: 20,
      paddingBottom: 20,
      textAlign: 'center',
      transform: "translateY(-11px)",
    }),

    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#FFE135': '#000000',
        color: state.isSelected ? '#000000': '#FFF',
        "&:hover": {
            color: '#FFE135',
        },
        borderRadius: '0px',
    }),

    control: (provided, state) => ({
        ...provided,
        textAlign: 'center',
        background: '#000000',
        color: '#fff',
        boxShadow: 'none',
        border: 0,
        borderRadius: '0px',
        marginLeft: '25%',
    }),

    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: '#fff',
        "&:hover": {
            color: '#FFE135',
        }
    }),

    indicatorSeparator: (provided, state) => ({
        ...provided,
        color: '#fff',
    }),

    input: (provided, state) => ({
        ...provided,
        color: '#fff',
    }),

    placeholder: (provided, state) => ({
        ...provided,
        marginRight: '30%',
        color: '#fff',
    }),

    multiValueLabel: (provided, state) => ({
        ...provided,
        color: '#fff',
        background: '#981C29',
        borderRadius: '0px',
    }),

    multiValueRemove: (provided, state) => ({
        ...provided,
        color: '#fff',
        background: '#981C29',
        borderRadius: '0px',
        "&:hover": {
            color: '#ff0000',
            borderRadius: '0px',
        },
    }),

  }

const MultiSelect = (props) => {
    

    return(
        <div className = "">
            <Select 
                onChange={props.onSelect}
                isMulti
                placeholder="Allergies / Dietary Restrictions"
                options={Allergies} 
                styles={customStyles}
                isSearchable={false}
            />
        </div>
    )
};



export default MultiSelect;
