import React from 'react';
import MyView from "../../components/MyView";

class UserMgr extends MyView {
  constructor(props) {
    super(props);
    this.state = {
      title: "订单管理"
    };
  }

  render() {
    return (<h2>订单管理</h2>);
  }
}

export default UserMgr;
