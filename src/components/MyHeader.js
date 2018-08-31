import React from "react"
import styles from "../routes/IndexPage.css";
import {Button, Icon, Menu, Badge, Dropdown, Layout} from "antd";
import {routerRedux} from "dva/router";
import {connect} from "dva/index";

class MyHeader extends React.Component {
  logout = () => {
    return this.props.dispatch(routerRedux.push({pathname: "/"}));
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">我的信息</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">修改密码</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout.Header className={styles.header}>
        <div className={styles.headerLogo}>开发系统</div>
        <div className={styles.headerUser}>欢迎你,
          <Dropdown overlay={menu}>
            <a><Icon type="user"/>管理员<Icon type="down"/></a>
          </Dropdown>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Badge count={5}>
            <Icon type="message"/>
          </Badge>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            onClick={this.logout} icon="poweroff"/>
        </div>
      </Layout.Header>
    )
  }
}

//不这么写dispatch不能用
export default connect()(MyHeader);
