import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/Build-controls/Build-controls';
const INGREDIENT_PRICES = {
    salad: 5,
    cheese: 8,
    meat: 9,
    bacon: 7
};
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }
    render() {
        let disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls updateIngredient={this.updateIngredient}
                    totalPrice = {this.state.totalPrice}
                    disabledInfo = {disabledInfo}></BuildControls>
            </Aux>
        )
    }
    updateIngredient = (action, type) => {
        const oldCount = this.state.ingredients[type];
        let updatedCount = 0;
        let newPrice;
        if (action === 'add') {
            updatedCount = oldCount + 1;
            newPrice = INGREDIENT_PRICES[type] + this.state.totalPrice;
        } else if (action === 'remove' && oldCount > 0) {
            updatedCount = oldCount - 1;
            newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    }
};

export default BurgerBuilder;