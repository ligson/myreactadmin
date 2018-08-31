import React from 'react';
import MyView from "../../components/MyView";

class UserMgr extends MyView {
  constructor(props) {
    super(props);
    this.state = {
      title: "用户管理"
    };
  }

  render() {
    return (<h2>用户管理</h2>);
  }
}

export default UserMgr;
