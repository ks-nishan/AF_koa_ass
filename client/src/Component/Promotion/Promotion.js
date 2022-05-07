import React, { Component } from "react";

import axios from "axios";

export default class Promotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promotion: [],
    };
    this.loadPromotion = this.loadPromotion.bind(this);
  }

  componentWillMount() {
    this.loadPromotion();
  }

  async loadPromotion() {
    const promise = await axios.get("http://localhost:3000/promotion");
    const status = promise.status;
    if (status === 200) {
      const data = promise.data;
      this.setState({ promotion: data });
    }
  }

  render() {
    return (
      <div>
        <h1>Promotions</h1>
        {this.state.promotion.map((promotion) => (
          <div key={promotion.id}>
            <table>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Code</th>
              </tr>

              <tr>
                <td>{promotion.id}</td>
                <td>{promotion.name}</td>
                <td>{promotion.code}</td>
              </tr>
            </table>
          </div>
        ))}
      </div>
    );
  }
}
