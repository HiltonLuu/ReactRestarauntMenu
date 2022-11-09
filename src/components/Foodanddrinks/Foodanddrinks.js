import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import {useCSVReader} from 'react-papaparse';
import { FoodCategories } from '../Categories/Foodcategories';
import './Foodanddrinks.css';

const filterAllergies = (menu, allergies) => {
    let filtered = menu.data;

    allergies.forEach(allergy => {
        filtered = filtered.filter(food => food.allergies.includes(allergy.value) === false);
    })

    return filtered;
};


const regularLayout = (menu, set, type, allergies) => {

    return(
    <ul className='foodDisplay'>
    {filterAllergies(menu, allergies).filter(food3 => food3.subcategory === type)
        .map(food4 => { return(
            <li key={food4.index} className='foodItem'>      
                        <p className='foodName'>{food4.name} <span className='price'>{food4.price}</span></p>
                        
                        <p>{food4.descr}</p>
            </li>
    )})}
    </ul>
    ) 
};

const sushiSashimiLayout = (menu, type) => {
    return(
    <table>
    {
    type === 'Nigiri/Sashimi' ? 
    <tr>
        <td></td>
        <td>Sushi 2pc</td>
        <td>Sashimi 3pc</td>
    </tr> :
    <tr>
        <td></td>
        <td>10pc</td>
        <td>16pc</td>
    </tr> 
    }
    
    {menu.data.filter(food3 => food3.subcategory === type)
        .map(food4 => { return(
            <tr key={food4.index}>      
                        <td>{food4.name}</td>
                        <td>{food4.price}</td>
                        <td>{food4.price2}</td>
            </tr>
    )})}
    </table>
    ) 
};





 
const Foodanddrinks = (props) => {
    const [fullMenu, setFullMenu] = useState(null);
    const [ text, setText ] = useState(null);


    let result = {};
    let subCat = "";

    const load = async () => {
        result = await fetch('./fooddrinkdata.csv').then(res => res.text());
        let test = await Papa.parse( result,  {header: true,});
        setText(test);
        setFullMenu(test);  
    };

    useEffect(() => {
            load();
            subCat = "";
      }, []);

    return (text && (

        <React.Fragment>
            {FoodCategories.filter(food1 => food1.value === props.currentCategory.value)[0].subcategories
            .map(food2 => { return (
                <React.Fragment>
                    <h3 className='subCat'>{food2}</h3>
                    {food2 === 'Nigiri/Sashimi' || food2 === 'Chefs Choice' ? sushiSashimiLayout(fullMenu, food2) : regularLayout(fullMenu, setFullMenu, food2, props.allergies)}  
                </React.Fragment>
            )})}
        </React.Fragment>
            
        
    ));
    

    
};

export default Foodanddrinks;