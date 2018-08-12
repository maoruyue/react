
import React, {Component} from 'react'
import {NavBar, List, WingBlank, WhiteSpace, InputItem, Radio, Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'

export default class Register extends Component{
  //初始化状态
  state = {
    username: '',
    password: '',
    password2: '',
    type: 'dashen'  // laoban,
  }

  toLogin = () =>{
    //编程式路由导航（通过纯js实现路由跳转）  还可以link路由标签（非编程式导航）
    //路由下有三个属性：history影响的是回退、location、match
    this.props.history.replace('/login')
  }

  //跳转到登录
  handleChange = (name, val) =>{
    this.setState({
      [name]: val    // 令属性名是一个变量，加一个中括号
    })
}
//请求登录
  register = () =>{
    console.log(this.state)
  }
  render(){
    const {type} = this.state
    return (

      <div>
        <NavBar>用户注册</NavBar>
        <Logo />
        <WhiteSpace />
        <WingBlank>
          <List>
            <InputItem
              type='text'
              placeholder='请输入用户名'
              onChange={(val) =>this.handleChange('username',val)} >
              用户名：
            </InputItem>
            <WhiteSpace />
            <InputItem
              type='password'
              placeholder='请输入密码'
              onChange={(val) =>this.handleChange('password',val)}>
              密码：
            </InputItem>
            <WhiteSpace />
            <InputItem
              type='text'
              placeholder='请确认密码名'
              onChange={(val) =>this.handleChange('password2',val)}>
              确认密码：
            </InputItem>
            <WhiteSpace />

            <List.Item>
              <span>用户类型：</span>&nbsp;&nbsp;
              <Radio checked={type === 'laoban'} onChange={() => {this.handleChange('type','laoban')}}>老板</Radio>&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='dashen'} onChange={() => {this.handleChange('type','dashen')}}>大神</Radio>
            </List.Item>

            <WhiteSpace />

            <Button type='primary' onClick={this.register}>注册</Button>
            <WhiteSpace />
            <Button onClick={this.toLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

/*
*
*
* 当点击注册时，会携带产生参数（用户名、密码。。。），查看这些参数，
* 一种是手动收集：当点击按钮后，一个一个读取参数
* 另一种是自动收集：当输入用户名后，就读取，所以就绑定监听，把最新的值，保存进去。
*                       官网中inputItem中有一个onChange属性{val： String}
* 注册组件有props属性和state，state下面有参数
*
*
* 官网radio下有onChange属性，{e: Object}
*
*
* */



