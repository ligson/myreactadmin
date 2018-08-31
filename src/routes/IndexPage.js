import React from 'react';
import {connect} from 'dva';
import {Route, Switch} from 'dva/router';
import {Link} from 'react-router-dom';
import {Icon, Layout, Menu, Breadcrumb} from "antd";
import styles from "./IndexPage.css";
import Welcome from '../pages/Welcome';
import Products from '../pages/product/ProductList';
import OrderMgr from '../pages/product/OrderMgr';
import UserMgr from '../pages/sysmgr/UserMgr';
import RoleMgr from '../pages/sysmgr/RoleMgr';
import MyHeader from "../components/MyHeader";

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


  render() {

    return (
      <Layout style={{width: "100%", height: "100%"}}>
        <MyHeader/>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}>
            <Menu theme="dark" defaultSelectedKeys={['product']} mode="inline">
              <SubMenu
                key="sub1"
                title={<span><Icon type="user"/><span>产品管理</span></span>}
              >
                <Menu.Item key="productList">
                  <Link to="/admin/product/productList">产品列表</Link>
                </Menu.Item>
                <Menu.Item key="orderMgr">
                  <Link to="/admin/product/orderMgr">订单列表</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={<span><Icon type="user"/><span>系统管理</span></span>}
              >
                <Menu.Item key="userMgr">
                  <Link to="/admin/sysmgr/userMgr">用户列表</Link>
                </Menu.Item>
                <Menu.Item key="roleMgr">
                  <Link to="/admin/sysmgr/roleMgr">角色列表</Link>
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
                {/*<Breadcrumb routes={}/>*/}
              </Header>
              <Content>
                <Switch>
                  <Route path="/admin/welcome" component={Welcome}/>
                  <Route path="/admin/product/productList" component={Products}/>
                  <Route path="/admin/product/orderMgr" component={OrderMgr}/>
                  <Route path="/admin/sysmgr/userMgr" component={UserMgr}/>
                  <Route path="/admin/sysmgr/roleMgr" component={RoleMgr}/>
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

export default connect()(IndexPage);
