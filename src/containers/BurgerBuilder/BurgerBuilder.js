import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/Build-controls/Build-controls';
import Modal from '../../shared/Modal/Modal';
import OrderSummary from '../../components/Burger/Order-summary/Order-summary';
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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }
    render() {
        let disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing}
                    modalClose={this.purchaseCancelHandeler}>
                    <OrderSummary ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        cancel={this.purchaseCancelHandeler}
                        success={this.purchaseSuccess} />
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls updateIngredient={this.updateIngredient}
                    totalPrice={this.state.totalPrice}
                    disabledInfo={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}></BuildControls>
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
        this.updatePurchaseState(updatedIngredients);
    }
    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }
    purchaseCancelHandeler = () => {
        this.setState({ purchasing: false })
    }
    purchaseSuccess = () => {
        alert('Purchase Success');
        this.setState({ purchasing: false })
    }
    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map((ingredient) => {
                return ingredients[ingredient]
            }).reduce((sum, ele) => {
                return sum + ele;
            }, 0)
        this.setState({ purchasable: sum > 0 });
    }
};

export default BurgerBuilder;