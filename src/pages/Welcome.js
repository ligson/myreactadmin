import React from 'react';
import {connect} from 'dva';
import MyView from "../components/MyView";

class Welcome extends MyView {
  constructor(props) {
    super(props);
    this.state = {
      title: "欢迎"
    };
  }

  render() {
    return (
      <h3>欢迎</h3>
    );
  }
}

export default connect()(Welcome);
