import React from 'react';
import MyView from "../components/MyView";

class Products extends MyView {
  constructor(props) {
    super(props);
    this.state = {
      title: "产品"
    };
  }

  render() {
    return (<h2>List of Products</h2>);
  }
}

export default Products;
