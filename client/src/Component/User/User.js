import React, { Component } from "react";

import axios from "axios";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      // id:'',
      // name:'',
      // role:'',
    };
    this.loadUsers = this.loadUsers.bind(this);
  }

  // handleChange = (e) =>{
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  // }

  componentWillMount() {
    this.loadUsers();
  }

  async loadUsers() {
    const promise = await axios.get("http://localhost:3000/user");
    const status = promise.status;
    if (status === 200) {
      const data = promise.data;
      this.setState({ users: data });
    }
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.state.users.map((users) => (
          <div key={users.id}>
            <table style={{ margin: "20px" }}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>User Name</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{users.id}</td>
                  <td>{users.name}</td>
                  <td>{users.role}</td>
                  <td>{users.userName}</td>
                  <td>{users.pw}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
        <hr />
        <div></div>
      </div>
    );
  }
}
