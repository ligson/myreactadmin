import React from 'react';
import MyView from "../../components/MyView";

class RoleMgr extends MyView {
  constructor(props) {
    super(props);
    this.state = {
      title: "角色"
    };
  }

  render() {
    return (<h2>角色管理</h2>);
  }
}

export default RoleMgr;
