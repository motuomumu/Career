import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col,} from 'antd';
import {Link} from 'react-router-dom'
import './login.css'
import 'antd/dist/antd.css'
// import {reqLogin}from '../../api'

var LoginCss = require('./login.css')    
class Login extends Component {


    render() {
        //const form = this.props.form;
        const { getFieldDecorator } = this.props.form;

        return (
            <div className={LoginCss.login}>
                <header className={LoginCss.header}>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={8}></Col>
                        <div>  
                        <Col span={2}>
                            <div className={LoginCss.header1}>
                                <Link to="/homepage">首页</Link>                                
                            </div>                           
                        </Col>
                        <Col span={1}>
                            <div className={LoginCss.header1}>
                            <span> | </span>
                            </div>                        
                        </Col>
                        <Col span={2}>
                            <div className={LoginCss.header1}>
                                <Link to="/personal">个人中心</Link>
                            </div>
                        </Col>
                        <Col span={1}>
                        <div className={LoginCss.header1}>
                            <span> | </span>
                            </div> 
                        </Col>
                        <Col span={2}>
                            <div className={LoginCss.header1}>
                                <Link to="/organization">公益组织</Link>
                            </div>
                        </Col>
                        <Col span={1}>
                        <div className={LoginCss.header1}>
                            <span> | </span>
                            </div> 
                        </Col>
                        <Col span={2}>
                            <div className={LoginCss.header1}>
                                <Link to="/news">新闻</Link>
                            </div>
                        </Col>
                        <Col span={1}>
                        <div className={LoginCss.header1}>
                            <span> | </span>
                            </div> 
                        </Col>
                        <Col span={2}>
                            <div >
                                <Button><Link to="/register">注册</Link></Button>
                            </div>
                        </Col>
                        </div>
                    </Row>

                </header>
                <section className={LoginCss.content}>
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className={LoginCss.form}>
                        <Form.Item>
                            {getFieldDecorator('account', {//配置对象：属性名是特定的一些名称
                                rules: [
                                    { required: true, message: '请输入用户名' },

                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户"
                                />,
                            )}

                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    { required: true, message: '请输入密码',},
                                    {min:4,message:'密码至少4位'},
                                    {max:12,message:'密码至多12位'},
                                    {pattern:/^[a-zA-Z0-9]+$/,message:'密码必须是数字或英文组成'},
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码" />)}
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className={LoginCss.b1}>
                            登录
                            </Button>
                        <Form.Item >
                            <Checkbox className={LoginCss.item3}>记住我</Checkbox>
                            <a className={LoginCss.forgot} href="">忘记密码</a>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
//包装Form组件生成一个新的组件   高阶组件 高阶函数
const WrapLogin = Form.create()(Login);
export default WrapLogin;