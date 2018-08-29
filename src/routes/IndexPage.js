import React from 'react';
import {connect} from 'dva';
import {Route, routerRedux, Switch} from 'dva/router';
import {Link} from 'react-router-dom';
import {Button, Icon, Layout, Menu} from "antd";
import styles from "./IndexPage.css";
import Welcome from '../pages/Welcome';
import Products from '../pages/Products';

const {Content, Header, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

class IndexPage extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  logout = () => {
    return this.props.dispatch(routerRedux.push({pathname: "/"}));
  };

  render() {
    return (
      <Layout style={{width: "100%", height: "100%"}}>
        <Header className={styles.header}>开发系统
          <Button onClick={this.logout}>退出</Button>
        </Header>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}>
            <Menu theme="dark" defaultSelectedKeys={['products']} mode="inline">
              <SubMenu
                key="sub1"
                title={<span><Icon type="user"/><span>产品管理</span></span>}
              >
                <Menu.Item key="products">
                  <Link to="/admin/products">产品</Link>
                </Menu.Item>
                <Menu.Item key="welcome">
                  <Link to="/admin/welcome">欢迎</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>
            <Layout>
              <Header className={styles.nav}>
                <Icon
                  className={styles.navTrigger}
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content>
                <Switch>
                  <Route path="/admin/welcome" exact component={Welcome}/>
                  <Route path="/admin/products" exact component={Products}/>
                </Switch>
              </Content>
            </Layout>
          </Content>
        </Layout>
        <Footer className={styles.header}> footer </Footer>
      </Layout>
    );
  }
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
