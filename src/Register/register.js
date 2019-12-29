import React, { Component } from 'react'
import { Form, Input, Cascader, Select, Button, AutoComplete, Radio, Row, Col} from 'antd';
import { reqRegister } from '../api'
import {Link} from 'react-router-dom'
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const residences = [
  {
    value: '四川',
    label: '四川',
    children: [
      {
        value: '成都',
        label: '成都',
        children: [
          {
            value: '金堂',
            label: '金堂',
          },
          {
            value: '双流',
            label: '双流',
          },
          {
            value: '简阳',
            label: '简阳',
          },
        ],
      },
      {
        value: '自贡',
        label: '自贡',
        children: [
          {
            value: '自流井区',
            label: '自流井区',
          },
        ]
      },
    ],
  },
  {
    value: '重庆',
    label: '重庆',
    children: [
      {
        value: '解放碑',
        label: '解放碑',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
var RegisterCss = require("./register.css")
class Register extends React.Component {
  state = {
    username: '',
    password: '',
    confirm: '',
    label: '',
    type: '',

    residence: '',
    confirmDirty: false,
    autoCompleteResult: [],
  };
  register = () => {
    console.log(this.state)
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { account, password, confirm, residence } = values
        reqRegister().then(response => {
          console.log('success', response.data)
        }).catch(error => {
          console.log('fail', error)

        })
      } else {
        console.log('失败')
      }
    });
    const form = this.props.form
    const values = form.getFieldsvalue
    console.log('handleSubmit()', values)
  };
  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('您输入的密码两次不一致!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };
  handleChange = (name, val) => {
    this.setState({
      [name]: val
    })
  }
  render() {
    const { type } = this.state
    const { label } = this.state
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <div className={RegisterCss.all}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit} className={RegisterCss.form}>
            <h2>用户注册</h2>
                <Form.Item label="用户名" onChange={val => { this.handleChange('account', val) }}>
                  {getFieldDecorator('account', {
                    rules: [
                      {
                        type: 'contant',
                        message: '您输入的账户无效!',
                      },
                      {
                        required: true,
                        message: '请输入你的用户名!',
                      },
                    ],
                  })(<Input placeholder="请输入你想要使用的用户名"/>)}
                </Form.Item>

          <Form.Item label="密码" onChange={val => { this.handleChange('password', val) }} hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '请输入你的密码!',
                },
                {
                  min: 4, message: '密码至少4位'
                },
                {
                  max: 12, message: '密码至多12位'
                },
                {
                  pattern: /^[a-zA-Z0-9]+$/, message: '密码必须是数字或英文组成'
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password placeholder="请输入你的密码"/>)}
          </Form.Item>
          <Form.Item label="确认密码" hasFeedback onChange={val => { this.handleChange('confirm', val) }}>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: '请确认你的密码!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} placeholder="请再次确认你的密码"/>)}
          </Form.Item>

          <Form.Item label="所在地" onChange={val => { this.handleChange('residence', val) }}>
            {getFieldDecorator('residence', {
              initialValue: ['四川', '成都', '隆昌'],
              rules: [
                { type: 'array', required: true, message: '请选择你的所在地!' },
              ],
            })(<Cascader options={residences} />)}
          </Form.Item>
          <Form.Item label="性别">
            <Radio.Group name="radiogroup" >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Radio value={1} checked={type === 'student'} onChange={() => this.handleChange('type', 'student')}>男</Radio>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Radio value={2} checked={type === 'teacher'} onChange={() => this.handleChange('type', 'teacher')}>女</Radio>
            </Radio.Group>
          </Form.Item>          
          <Form.Item label="特长">
          <Input.TextArea rows={2} placeholder="请写出你的性格和特长"/>
          </Form.Item>
          <Form.Item {...tailFormItemLayout} className={RegisterCss.Button}>
            <Button type="primary" htmlType="submit" onClick={this.register}>
            &nbsp;&nbsp;&nbsp;注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册&nbsp;&nbsp;&nbsp;
          </Button>
          </Form.Item>
          <div className={RegisterCss.back}>
            <Row>
              <Col span={20}></Col>
              <Col span={4}>
                <Link to="/login">已有账号？点击登录</Link>
              </Col>
            </Row>
          </div>
        </Form>
      </div>

    );
  }
}
//包装From 组件 生成一个新的组件  高阶组件 高阶函数
const WrapRegister = Form.create()(Register);
export default WrapRegister;
