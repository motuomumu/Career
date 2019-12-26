import React from 'react'
import {Row,PageHeader,Card,Avatar,Col,Upload, Icon, message,Tabs} from 'antd'


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
  function callback(key){
    console.log(key);
  }
const {TabPane} = Tabs; 
const {Meta} =Card;
var CenterPageCss = require('./center.css')
export default class CenterPage extends React.Component{
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
    
    render(){
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          )
          const { imageUrl } = this.state;

      
        return(
            <div className>
                <div className={CenterPageCss.bg1}>
                    <img src='/center.jpg' className={CenterPageCss.bg1}></img>
                    <div>
                        <a href='../../homepage'>
                    <PageHeader
                        onBack={() => window.history.back() }
                        
                        title="返回"
                        subTitle="这里是个人中心"
                         /></a>
                    </div>
                    <div>
                        <img src='/v2.jpg' className={CenterPageCss.v2}></img>
                    </div>
                    <div className={CenterPageCss.user}>
                    <Row>
                        <Col span={1}></Col>

                        <Col span={6}>
                            <Card  hoverable style={{width:215 }} >
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
                        <Col span={4}>
                            <Card hoverable style={{width:120}} >
                                个人资料
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card style={{width:120}} hoverable>
                                我的动态
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card style={{width:120}} hoverable>
                                我的组织
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card style={{width:120}} hoverable>
                                修改密码
                            </Card>
                        </Col>
                        
                   </Row>

                   </div>
                   
                </div>
            </div>
        )
    }
}