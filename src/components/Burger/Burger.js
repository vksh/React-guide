import React from 'react';
import './Burger.scss';
import BurgerIngredient from './Burger-ingredient/Burger-ingredient';
const burger = (props) => {
    const transformIngredients = Object.keys(props.ingredients)
        .map((ingredient) => {
            return [...Array(props.ingredients[ingredient])]
                .map((_, i) => {
                    return <BurgerIngredient key={ingredient + i} type={ingredient} />
                })
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    return (
        <div className='burger'>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {transformIngredients.length === 0 ? <p>Please add ingredient</p> : transformIngredients}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    )

}
export default burger;