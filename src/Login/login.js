import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col,message} from 'antd';
import {Link} from 'react-router-dom'
import './login.css'
import 'antd/dist/antd.css'
// import {reqLogin}from '../../api'

var LoginCss = require('./login.css')    
class Login extends Component {
    constructor(props){
        super(props);
        this.state={}
        //为空时即为初始化
    }
    
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }//作用：修改state的value

    // loginpage = ()=>{
    //     //XHR
    //     var xhr = new XMLHttpRequest()
    //     var data={
    //         "username":this.state.username,
    //         "password":this.state.password
    //     }
    //     //往链接上发送数据前需配置一个响应
    //     //例：open连接
    //     xhr.open("post","/login")
    //     //配置响应函数
    //     xhr.onreadystatechange=function() {
    //         if (xhr.readyState==4) {
    //             if (xhr.status==200) {
    //                 message.info(xhr.responseText)
    //                 console.log(xhr.responseText)
    //             }else{
    //                 message.info(xhr.status)
    //             }
    //         }
    //     }
        
    //     //发送数据
    //     xhr.send()
    //     }
    // }//没有参数的原因：都可以从state中进行读取 
    loginpage =()=>{
        var xhr = new XMLHttpRequest()
        var data={
            "username":this.state.username,
            "password":this.state.password
        }
        xhr.open("post","/login")

        xhr.onreadystatechange=function() {
            if (xhr.readyState==4) {
                if (xhr.status==200) {
                    message.info(xhr.responseText)
                    console.log(xhr.responseText)
                    var result = JSON.parse(xhr.responseText)//将JSON转换回为前端对象
                    if (result.state==2) {
                        message.info("密码错误！")
                    }else if (result.state==1) {
                        message.info("登陆成功！")
                        this.props.history.push("/homepage")//上学期讲过history.push，上网搜索
                    }
                }else{
                    message.info(xhr.status)
                }
            }
        }
        xhr.setRequestHeader('content-type','application/json')
        console.log(JSON.stringify(data))
        xhr.send(JSON.stringify(data))
    }

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
                                <Link to="">招聘公司</Link>
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
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} name="username"
                                    placeholder="用户" value={this.state.username} onChange={e=>this.changeValue(e)}
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
                                type="password" name="password"
                                placeholder="密码" value={this.state.password} onChange={e=>this.changeValue(e)}/>)}
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className={LoginCss.b1} onClick={this.loginpage}>
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