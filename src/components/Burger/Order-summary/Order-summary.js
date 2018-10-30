import React from 'react';
import Aux from '../../../hoc/Auxi';
import './Order-summary.scss';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredient => {
            return (<li><span>{ingredient.toUpperCase()}</span>: {props.ingredients[ingredient]}</li>)
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul className='summary-list'>
                {ingredientSummary}
            </ul>
            <p>Your total amount is <strong>{props.price}</strong></p>
            <p>Continue to checkout</p>
            <button className='btn btn-warning mr-4'
                onClick={props.cancel}> Cancel</button>
            <button className='btn btn-primary'
                onClick={props.success}
            >Continue</button>
        </Aux>
    )
};

export default orderSummary;