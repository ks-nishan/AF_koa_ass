import React, { Component } from "react";

import axios from "axios";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name: "",
      price: "",
      id: "",
    };
    this.loadItems = this.loadItems.bind(this);
  }

  componentWillMount() {
    this.loadItems();
  }

  async loadItems() {
    const promise = await axios.get("http://localhost:3000/items");
    const status = promise.status;
    if (status === 200) {
      const data = promise.data;
      this.setState({ items: data });
    }
  }

  addToCart = () => {
    if (this.state.id !== "" && this.state.name !== "") {
      axios.post("http://localhost:3000/myCart/add", this.state).then((res) => {
        this.setState({
          name: "",
          price: "",
          id: "",
        });
      });
      window.location = "/items";
    }
  };

  addToWL = () => {
    if (this.state.id !== "" && this.state.name !== "") {
      axios
        .post("http://localhost:3000/wishList/add", this.state)
        .then((res) => {
          console.log("successfully posted");
          this.setState({
            name: "",
            price: "",
            id: "",
          });
        });
      window.location = "/items";
    }
  };

  render() {
    return (
      <div>
        <h1>Items</h1>
        {this.state.items.map((items) => (
          <div key={items.id}>
            <table style={{ border: "1px solid black", margin: "20px" }}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{items.id}</td>
                  <td> {items.name}</td>
                  <td>{items.price}</td>
                </tr>
              </tbody>
              <button onClick={() => this.addToCart()}>Add to cart</button>
              <br></br>
              <button onClick={() => this.addToWL()}>Add to wishlist</button>
            </table>
          </div>
        ))}
      </div>
    );
  }
}
