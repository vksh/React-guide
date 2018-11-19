import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/Build-controls/Build-controls';
import Modal from '../../shared/Modal/Modal';
import OrderSummary from '../../components/Burger/Order-summary/Order-summary';
import axios from '../../axios-orders';
import Spinner from '../../shared/Spinner/Spinner';
import errorHandler from '../../components/ErrorHandler/ErrorHandler';
const INGREDIENT_PRICES = {
    salad: 5,
    cheese: 8,
    meat: 9,
    bacon: 7
};
class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }
    componentDidMount() {
        axios.get('/ingredients.json').then(
            response => {
                this.setState({ ingredients: response.data })
            }
        )
            .catch((error) => console.log(error));
    }
    render() {
        let disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary;
        if (this.state.loading) {
            orderSummary = <Spinner></Spinner>
        }
        let burger;
        if (this.state.ingredients && !this.state.loading) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <BuildControls updateIngredient={this.updateIngredient}
                        totalPrice={this.state.totalPrice}
                        disabledInfo={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}></BuildControls>
                </Aux>);
            orderSummary = <OrderSummary ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                cancel={this.purchaseCancelHandeler}
                success={this.purchaseSuccess} />;
        } else {
            burger = <Spinner></Spinner>;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing}
                    modalClose={this.purchaseCancelHandeler}>
                    {orderSummary}
                </Modal>
                {burger}
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
        this.setState({ loading: true });
        const order = {
            ingredient: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Vikash',
                address: {
                    street: '112 street',
                    zipCode: '122321',
                    country: 'India'
                },
                email: 'Abc@abc.com',
            },
            deliveryMethod: 'fastest'
        };
        const initialState = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchasable: false,
            purchasing: false,
            loading: false
        }
        axios.post('/order.json', order)
            .then((response) => {
                this.setState(initialState)
            })
            .catch((error) => {
                this.setState(initialState)
                console.log(error);
            });
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

export default errorHandler(BurgerBuilder);