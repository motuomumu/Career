import React from 'react'
import {
  Row, PageHeader, Card, Avatar, Col, Upload, Icon, message, Tabs, Form,
  Layout
} from 'antd'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import ModifyPage from './Modify/modify';
import ProfilePage from './Profile/profile'
import DynamicPage from './Dynamic/dynamic';
import JoinPage from './Join/join';
import img1 from '../Image/im7.jpg'
import img2 from '../Image/fly.png'

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

const PandaSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
      fill="#6B676E"
      p-id="1143"
    />
    <path
      d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
      fill="#FFEBD2"
      p-id="1144"
    />
    <path
      d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
      fill="#E9D7C3"
      p-id="1145"
    />
    <path
      d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
      fill="#FFFFFF"
      p-id="1146"
    />
    <path
      d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
      fill="#6B676E"
      p-id="1147"
    />
    <path
      d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
      fill="#464655"
      p-id="1148"
    />
    <path
      d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1149"
    />
    <path
      d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1150"
    />
  </svg>);
const { Header, Footer, Sider, Content } = Layout;
const PandaIcon = props => <Icon component={PandaSvg} {...props} />;
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

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    const { imageUrl } = this.state;
    
    return (
      <div>
        <div >
          <img src={img1} className={CenterPageCss.bg1}></img>
          <div>
            <a href='../../homepage'>
              <PageHeader
                onBack={() => window.history.back()}

                title="返回"
                subTitle="这里是个人中心"
              /></a>
                  <div className={CenterPageCss.panda}>
                    <PandaIcon style={{ fontSize: '32px' }} />
                    <PandaIcon style={{ fontSize: '32px' }} />
                  </div>
                </div>
          <div>
            <img src={img2} className={CenterPageCss.v2}></img>
          </div>
         
          <div className={CenterPageCss.user}>
            <BrowserRouter basename="center">
              <Row>
                <Col span={1}></Col>

                <Col span={6}>
                  <Card hoverable style={{ width: 155 }} >
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
                          我的预约
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