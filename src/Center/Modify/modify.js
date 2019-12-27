import React from 'react';
import {Form,
    Input,
    Cascader,
    Select,
    Button,
    AutoComplete,
    Radio,
} from 'antd'
  
var ModifyPageCss = require('./modify.css')
const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;
class ModifyPage extends React.Component{
    state={
        confirmDirty: false,
        autoCompleteReault:[]
      }
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
      compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
          callback('您输入的密码不一致!');
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
      }
    render(){
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
          const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
          })(
            <Select style={{ width: 70 }}>
              <Option value="86">+86</Option>
              <Option value="87">+87</Option>
            </Select>,
          );
      
        return (
            <div >
            <Form {...formItemLayout} onSubmit={this.handleSubmit} className={ModifyPageCss.header}>
                    <Form.Item label="旧密码" hasFeedback>
                {getFieldDecorator('oldpassword', {
                  rules: [
                    {
                      required: true,
                      message: '请输入你的旧密码!',
                    },
                    {
                      validator: this.validateToBeforePassword,
                    },
                  ],
                })(<Input.Password />)}
                  </Form.Item>
                    <Form.Item label="新密码" hasFeedback>
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: '请输入你的新密码!',
                        },
                        {
                          validator: this.validateToNextPassword,
                        },
                      ],
                    })(<Input.Password />)}
                  </Form.Item>
                  <Form.Item label="确认新密码" hasFeedback >
                    {getFieldDecorator('confirm', {
                      rules: [
                        {
                          required: true,
                          message: '请确认你的新密码!',
                        },
                        {
                          validator: this.compareToFirstPassword,
                        },
                      ],
                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                  </Form.Item>
                  <div className={ModifyPageCss.Button}>
                  <Button type="primary">确认</Button>
                  </div>
                </Form>
                </div>
        )
    }
}
const WrapModifyPage = Form.create()(ModifyPage);
export default WrapModifyPage;