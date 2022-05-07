import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import User from "./Component/User/User";
import AddUser from "./Component/User/AddUser";
import Item from "./Component/Item/Item";
import AddItems from "./Component/Item/AddItems";
import Inventory from "./Component/Inventory/Inventory";
import Promotion from "./Component/Promotion/Promotion";
import MyCart from "./Component/MyCart/MyCart";
import AddToCart from "./Component/MyCart/AddToCart";
import WishList from "./Component/WishList/WishList";
import AddToWL from "./Component/WishList/AddToWL";
import AddPromotion from "./Component/Promotion/AddPromotion";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/users" exact component={User} />
        <Route path="/user/add" exact component={AddUser} />
        <Route path="/items" exact component={Item} />
        <Route path="/item/add" exact component={AddItems} />
        <Route path="/inventories" exact component={Inventory} />
        <Route path="/promotions" exact component={Promotion} />
        <Route path="/promotion/add" exact component={AddPromotion} />
        <Route path="/myCart" exact component={MyCart} />
        <Route path="/myCart/add" exact component={AddToCart} />
        <Route path="/wishList" exact component={WishList} />
        <Route path="/wishList/add" exact component={AddToWL} />
      </Router>
    );
  }
}

export default App;
