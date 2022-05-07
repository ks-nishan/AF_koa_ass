import React, { Component } from "react";

import axios from "axios";

export default class AddPromotion extends Component {
  state = {
    users: [],
    name: "",
    code: "",
    id: "",
  };
  handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    if (this.state.id !== "" && this.state.name != "") {
      axios
        .post("http://localhost:3000/promotion/add", this.state)
        .then((res) => {
          this.setState({
            name: "",
            code: "",
            id: "",
          });
        });
      window.location = "/promotions";
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
          <label>Promo Code</label>
          <input
            type="text"
            name="code"
            onChange={(e) => this.handleChange(e)}
          />

          <br></br>

          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
