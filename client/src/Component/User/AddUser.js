import React, { Component } from "react";

import axios from "axios";

export default class AddUser extends Component {
  state = {
    users: [],
    name: "",
    role: "",
    id: "",
  };
  handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    if (this.state.id !== "" && this.state.name != "") {
      axios.post("http://localhost:3000/user/add", this.state).then((res) => {
        console.log("successfully posted");
        this.setState({
          name: "",
          role: "",
          id: "",
          // username: "",
          // password: "",
        });
      });
      window.location = "/users";
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
          <label>Role</label>
          <select
            type="text"
            name="role"
            onChange={(e) => this.handleChange(e)}
          >
            <option>Trader</option>
            <option>Customer</option>
          </select>
          <br></br>
          <label>User Name</label>
          <input
            type="text"
            name="userName"
            onChange={(e) => this.handleChange(e)}
          />
          <br></br>
          <label>Password</label>
          <input type="text" name="pw" onChange={(e) => this.handleChange(e)} />
          <br></br>
          <br></br>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
