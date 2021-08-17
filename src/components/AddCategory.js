
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

   const [inputValue, setInputValue] = useState('');
   
   const handleInputChange = (e) => {
      // console.log(e.target.value);
      setInputValue(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();      
      // console.log('Submit Hecho');

      if( inputValue.trim().length > 0 ) {
         setCategories( c => [ inputValue, ...c ] );
         setInputValue('');
      }

   }


   return (
      <form onSubmit={ handleSubmit }>
         <input 
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
            placeholder='New category'
         />
      </form>
   )
}

AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired
}

export default AddCategory
