import React from 'react';
import PropTypes from 'prop-types';
import './Burger-ingredient.scss';
const burgerIngredient = (props) => {
    let ingredient = null;
    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className='bread-bottom'></div>;
            break;
        case ('bread-top'):
            ingredient = <div className='bread-top'>
                <div className='seeds1'></div>
                <div className='seeds1'></div>
            </div>
            break;
        case ('meat'):
            ingredient = <div className='meat'></div>
            break;
        case ('bacon'):
            ingredient = <div className='bacon'></div>
            break;
        case ('cheese'):
            ingredient = <div className='cheese'></div>
            break;
        case ('salad'):
            ingredient = <div className='salad'></div>
            break;
        default:
            ingredient = null;
            break;
    }
    return ingredient;
}
burgerIngredient.proptype = {
    type: PropTypes.string
}
export default burgerIngredient;