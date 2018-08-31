import React from 'react';
import {Button, Checkbox, Form, Icon, Input, Modal, message} from "antd";
import {routerRedux} from 'dva/router';
import {connect} from 'dva';
import styles from "../assets/css/login.css"

const FormItem = Form.Item;

class Login extends React.Component {
  startLogin = () => {
    console.log("login-->");
    //routerRedux.push("/admin");
    //this.props.dispatch(routerRedux.push({pathname: "/admin"}));
    return this.props.dispatch(routerRedux.push({pathname: "/admin/welcome"}));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //console.log('Received values of form: ', values);
        if (values.username === "admin" && values.password === "admin") {
          message.success('登录成功');
          return this.props.dispatch(routerRedux.push({pathname: "/admin/welcome"}));
        } else {
          Modal.error({
            title: '错误提示',
            content: '用户名密码错误(admin:admin)',
          });
        }
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
          <h3>XXXXh后台管理系统</h3>
        </div>
        <div className={styles.loginBody}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{required: true, message: '请输入你的用户名!'}],
              })(
                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="用户名"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{required: true, message: '请输入你的密码!'}],
              })(
                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                       placeholder="密码"/>
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
              或者 <a href="">现在注册!</a>
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住密码</Checkbox>
              )}
              <a className="login-form-forgot" href="">忘记密码</a>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
};
const LoginForm = Form.create({})(Login);
export default connect()(LoginForm);
