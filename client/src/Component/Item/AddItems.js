import React, { Component } from "react";

import axios from "axios";

export default class AddItems extends Component {
  state = {
    users: [],
    name: "",
    price: "",
    id: "",
  };
  handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    if (this.state.id !== "" && this.state.name != "") {
      axios.post("http://localhost:3000/items/add", this.state).then((res) => {
        console.log("successfully posted");
        this.setState({
          name: "",
          price: "",
          id: "",
          // username: "",
          // password: "",
        });
      });
      window.location = "/items";
    }
  };

  render() {
    return (
      <div>
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
            type="text"
            name="price"
            onChange={(e) => this.handleChange(e)}
          />
          <br></br>
          {/* <label>User Name</label>
          <input
            type="text"
            name="username"
            onChange={(e) => this.handleChange(e)}
          />
          <br></br>
          <label>Password</label>
          <input
            type="text"
            name="password"
            onChange={(e) => this.handleChange(e)}
          /> */}
          <br></br>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
