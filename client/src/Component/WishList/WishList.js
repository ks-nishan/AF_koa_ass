import React, { Component } from "react";

import axios from "axios";

export default class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishList: [],
    };
    this.loadwishList = this.loadwishList.bind(this);
  }

  componentWillMount() {
    this.loadwishList();
  }

  async loadwishList() {
    const promise = await axios.get("http://localhost:3000/wishList");
    const status = promise.status;
    if (status === 200) {
      const data = promise.data;
      this.setState({ wishList: data });
    }
  }

  render() {
    return (
      <div>
        <h1>Wish List</h1>
        {this.state.wishList.map((wishList) => (
          <div key={wishList.id}>
            <table style={{ border: "1px solid black", margin: "20px" }}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tr>
                <td>{wishList.id}</td>
                <td>{wishList.name}</td>
                <td>{wishList.price}</td>
              </tr>
            </table>
          </div>
        ))}
      </div>
    );
  }
}
