import React from 'react';
import './Build-controls.scss';
import BuildControl from './Build-control/Build-control';
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
]
const buildControls = (props) => (
    <div className='build-controls'>
        <p className='price'>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map((control, index) => (
            <BuildControl
                key={index}
                label={control.label}
                update={(param) => props.updateIngredient(param, control.type)}
                disabledInfo={props.disabledInfo[control.type]}></BuildControl>
        ))}
        <button disabled={!props.purchasable}
            onClick={props.ordered} className='btn btn-primary btn-lg mt-3'>Order Now</button>
    </div>
)


export default buildControls;