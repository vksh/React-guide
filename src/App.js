import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Route path='/checkout' exact component={Checkout} />
            <Route path='/' exact component={BurgerBuilder} />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
