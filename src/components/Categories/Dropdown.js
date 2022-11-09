import React, { useState } from 'react';
import { FoodCategories } from "./Foodcategories";
/*import './Foodmenu.css';*/
import './Dropdown.css';
import Select from 'react-select';


const WindowNavbar = (props) => {
    return(
        <nav className="WindowNavbarItems">
            <ul className={'window-navbar-menu'}>
                {FoodCategories.map((item, index) => {
                    return (
                        <li key={index}>
                            <button 
                            className={item.cName} 
                            value={item.value}
                            onClick={props.onSelect}
                            type="button"
                            >
                                {item.label}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
};

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
    }),

    singleValue: (provided, state) => ({
        ...provided,
        textAlign: 'center',
        color: '#fff',
        padding: 0,
        boxShadow: 'none',
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

  }


const Dropdown = (props) => {
    

    return(
        <div className = "dropdown">
            <Select 
                defaultValue={FoodCategories[0]}
                onChange={props.onSelect}
                options={FoodCategories} 
                styles={customStyles}
                isSearchable={false}
            />
        </div>
    )
};



export {WindowNavbar, Dropdown};