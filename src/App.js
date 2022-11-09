import React, { useState, useEffect, useRef } from 'react';
import Navbar from "./components/Navbar/Navbar";
import {WindowNavbar, Dropdown} from "./components/Categories/Dropdown";
import { FoodCategories } from "./components/Categories/Foodcategories";
import MultiSelect from "./components/Categories/MultiSelect";
import Foodanddrinks from './components/Foodanddrinks/Foodanddrinks';
import './App.css';

function App() {

  const [selectedOption, setSelectedOption] = useState(FoodCategories[0]);
  const [allergens, setAllergy] = useState([]);


  const optionSelect1 = (event) => {
    setSelectedOption(FoodCategories.filter(food => food.value === event.target.value)[0]);
  };

  const optionSelect2 = (event) => {
    setSelectedOption(event);
  };

  const optionSelect3 = (event) => {
      setAllergy(event);
  };


  /* reference w3schools website for sidescrolling list component
  https://www.w3schools.com/howto/howto_css_menu_horizontal_scroll.asp
  */ 
  return (
    <div className="App">
      <Navbar />
      <WindowNavbar onSelect={optionSelect1}/>
      <Dropdown onSelect={optionSelect2} />
      <MultiSelect onSelect={optionSelect3}/>
      <Foodanddrinks currentCategory={selectedOption} allergies={allergens} />
    </div>
  );
}

export default App;
