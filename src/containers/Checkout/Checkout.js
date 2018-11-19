import React, { Component } from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
class Checkout extends Component {
    state = {
        ingredients: {
            cheese: 2,
            bacon: 1
        }
    }
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}></CheckoutSummary>
            </div>

        )
    }
}

export default Checkout;