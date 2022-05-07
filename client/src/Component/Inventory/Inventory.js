import React, { Component } from "react";

import axios from "axios";

export default class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventories: [],
    };
    this.loadInventoryies = this.loadInventoryies.bind(this);
  }

  componentWillMount() {
    this.loadInventoryies();
  }

  async loadInventoryies() {
    const promise = await axios.get("http://localhost:3000/inventory");
    const status = promise.status;
    if (status === 200) {
      const data = promise.data;
      this.setState({ inventories: data });
    }
  }

  render() {
    return (
      <div>
        <h1>Inventory</h1>
        {this.state.inventories.map((inventories) => (
          <div key={inventories.id}>
            <table style={{ border: "1px solid black" }}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>qty</th>
                  <th>MFD</th>
                  <th>EXP Date</th>
                </tr>
              </thead>
              <tr>
                <td>{inventories.id}</td>
                <td>{inventories.name}</td>
                <td>{inventories.qty}</td>
                <td>{inventories.MFD}</td>
                <td>{inventories.EXD}</td>
              </tr>
            </table>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}
