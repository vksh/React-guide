import React from 'react';
import Burger from '../Burger/Burger';
import './CheckoutSummary.scss';
const checkoutSummary = (props) => {
    return (
        <div className='checkout-summary'>
            <h1>We hope it tastes well</h1>
            <div className='burger'>
                <Burger ingredients={props.ingredients}></Burger>
            </div>
            <button className='btn btn-lg btn-danger mr-2'
                clicked=''>Cancel</button>
            <button className='btn btn-lg btn-success ml-2'>Continue</button>

        </div>
    )
};
export default checkoutSummary;