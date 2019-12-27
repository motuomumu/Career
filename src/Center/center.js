import React from 'react'
import {
  Row, PageHeader, Card, Avatar, Col, Upload, Icon, message, Tabs, Form,
  Input,
  Cascader,
  Select,
  Button,
  AutoComplete,
  Radio,
} from 'antd'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import ModifyPage from './Modify/modify';
import ProfilePage from './Profile/profile'
import DynamicPage from './Dynamic/dynamic';
import JoinPage from './Join/join';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
function callback(key) {
  console.log(key);
}
// const {TabPane} = Tabs; 
// const {Meta} =Card;
// const {Option} = Select;
// const AutoCompleteOption = AutoComplete.Option;
var CenterPageCss = require('./center.css')
export default class CenterPage extends React.Component {
  state = {
    loading: false,
  }
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  }
  //   state={
  //     confirmDirty: false,
  //     autoCompleteReault:[]
  //   }
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFieldsAndScroll((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //     }
  //   });
  // };

  // handleConfirmBlur = e => {
  //   const { value } = e.target;
  //   this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  // }
  //   compareToFirstPassword = (rule, value, callback) => {
  //     const { form } = this.props;
  //     if (value && value !== form.getFieldValue('password')) {
  //       callback('您输入的密码不一致!');
  //     } else {
  //       callback();
  //     }
  //   };

  //   validateToNextPassword = (rule, value, callback) => {
  //     const { form } = this.props;
  //     if (value && this.state.confirmDirty) {
  //       form.validateFields(['confirm'], { force: true });
  //     }
  //     callback();
  //   }
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    const { imageUrl } = this.state;
    //         const { getFieldDecorator } = this.props.form;
    //         const { autoCompleteResult } = this.state;
    //         const formItemLayout = {
    //           labelCol: {
    //             xs: { span: 24 },
    //             sm: { span: 8 },
    //           },
    //           wrapperCol: {
    //             xs: { span: 24 },
    //             sm: { span: 16 },
    //           },
    //         };
    //         const tailFormItemLayout = {
    //           wrapperCol: {
    //             xs: {
    //               span: 24,
    //               offset: 0,
    //             },
    //             sm: {
    //               span: 16,
    //               offset: 8,
    //             },
    //           },
    //         };
    //         const prefixSelector = getFieldDecorator('prefix', {
    //           initialValue: '86',
    //         })(
    //           <Select style={{ width: 70 }}>
    //             <Option value="86">+86</Option>
    //             <Option value="87">+87</Option>
    //           </Select>,
    //         );



    return (
      <div>
        <div >
          <img src='/center.jpg' className={CenterPageCss.bg1}></img>
          <div>
            <a href='../../homepage'>
              <PageHeader
                onBack={() => window.history.back()}

                title="返回"
                subTitle="这里是个人中心"
              /></a>
          </div>
          <div>
            <img src='/v2.jpg' className={CenterPageCss.v2}></img>
          </div>
          <div className={CenterPageCss.user}>
            <BrowserRouter basename="center">
              <Row>
                <Col span={1}></Col>

                <Col span={6}>
                  <Card hoverable style={{ width: 200 }} >
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      beforeUpload={beforeUpload}
                      onChange={this.handleChange}
                    >
                      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                  </Card>
                </Col>
                <div>
                  <div className={CenterPageCss.set}>
                    <Col span={17}>
                      <Link to="/profile">
                        <Card hoverable style={{ width: 120 }} className={CenterPageCss.Card}>
                          个人资料
                            </Card>
                      </Link>

                      <Link to="/dynamic">
                        <Card style={{ width: 120 }} className={CenterPageCss.Card} >
                          我的动态
                            </Card>
                      </Link>

                      <Link to="/join">
                        <Card style={{ width: 120 }} className={CenterPageCss.Card}>
                          我的组织
                            </Card>
                      </Link>

                      <Link to="/modify">
                        <Card style={{ width: 120 }} className={CenterPageCss.Card}>
                          修改密码
                            </Card>
                      </Link>
                    </Col>
                    <Switch>
                      <Route path="/modify" component={ModifyPage}></Route>
                      <Route path="/profile" component={ProfilePage}></Route>
                      <Route path="/dynamic" component={DynamicPage}></Route>
                      <Route path="/join" component={JoinPage}></Route>
                    </Switch>
                  </div>
                </div>
              </Row>
            </BrowserRouter>
          </div>
        </div>
      </div>
    )
  }
}

// const WrapCenterPage = Form.create()(CenterPage);
// export default WrapCenterPage;