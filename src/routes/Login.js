import React from 'react';
import {Button} from "antd";
import {routerRedux} from 'dva/router';
import {connect} from 'dva';

class Login extends React.Component {
  startLogin = () => {
    console.log("login-->");
    //routerRedux.push("/admin");
    //this.props.dispatch(routerRedux.push({pathname: "/admin"}));
    return this.props.dispatch(routerRedux.push({pathname: "/admin/welcome"}));
  };

  render() {
    return (
      <Button onClick={this.startLogin}>登录</Button>
    )
  }
};

export default connect()(Login);
