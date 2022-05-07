import React, { Component } from "react";

import axios from "axios";

export default class AddToWL extends Component {
  state = {
    myCart: [],
    items: [],
    name: "",
    price: "",
    id: "",
    qty: "",
    subTotal: "",
  };

  handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    if (this.state.id !== "" && this.state.name !== "") {
      axios
        .post("http://localhost:3000/wishList/add", this.state)
        .then((res) => {
          console.log("successfully Added");
          this.setState({
            name: "",
            price: "",
            id: "",
            qty: "",
            subTotal: "",
          });
        });
      window.location = "/myCart";
    }
  };

  render() {
    return (
      <div>
        <h2>Add to WishList</h2>
        <form onSubmit={() => this.handleSubmit()}>
          <label>ID</label>
          <input type="text" name="id" onChange={(e) => this.handleChange(e)} />
          <br></br>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => this.handleChange(e)}
          />
          <br></br>
          <label>Price</label>
          <input
            type="number"
            name="price"
            onChange={(e) => this.handleChange(e)}
          />

          <br></br>
          <button type="submit">ADD</button>
        </form>
      </div>
    );
  }
}
