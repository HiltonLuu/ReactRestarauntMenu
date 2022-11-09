import React, { useState } from 'react';
import { FoodCategories } from "./Foodcategories";
import './Sidescrollmenu.css';
import Select from 'react-select';

const Sidescrollmenu = (props) => {
    return(
        <div className="sidescroll-menu">
            <ul className={'sidescroll-items'}>
                {props.subcats.map((item, index) => {
                    return (
                        <li key={index}>
                            <button 
                            className={props.class} 
                            value={item}
                            onClick={props.onSelect}
                            type="button"
                            >
                                {item}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Sidescrollmenu;