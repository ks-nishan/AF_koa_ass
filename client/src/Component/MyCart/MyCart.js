import React, { Component } from "react";

import axios from "axios";

export default class MyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myCart: [],
    };
    this.loadMyCart = this.loadMyCart.bind(this);
  }

  componentWillMount() {
    this.loadMyCart();
  }

  async loadMyCart() {
    const promise = await axios.get("http://localhost:3000/myCart");
    const status = promise.status;
    if (status === 200) {
      const data = promise.data;
      this.setState({ myCart: data });
    }
  }

  render() {
    return (
      <div>
        <h1>My Cart</h1>
        {this.state.myCart.map((myCart) => (
          <div key={myCart.id}>
            <table style={{ border: "1px solid black" }}>
              <thead>
                <tr style={{ border: "1px solid black" }}>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>qty</th>
                  <th>Sub total</th>
                </tr>
              </thead>
              <tbody style={{ border: "1px solid black" }}>
                <tr>
                  <td>{myCart.id}</td>
                  <td>{myCart.name}</td>
                  <td>{myCart.price}</td>
                  <td>{myCart.qty}</td>
                  <td>{myCart.subTotal}</td>
                  <br></br>
                  <br></br>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  }
}
