import React from 'react';
import {Row,Col,Icon,Layout,Carousel,Card,Menu,Dropdown,Button,message} from 'antd'
import {Link} from 'react-router-dom'

const { Header, Footer, Sider, Content } = Layout;
var NewPageCss = require("./new.css")
function onChange(a, b, c) {
    console.log(a, b, c);
  }
window.onload=function(){
    var info = document.getElementById("")
}
const {Meta} =Card;
const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Link to="/organization"><Icon type="safety-certificate" />&nbsp;组织机构</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/personal"><Icon type="user" />&nbsp;个人中心</Link>
      </Menu.Item>
    </Menu>
  );
 
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
export default class NewPage extends React.Component{
    render(){
        return(
            <div className={NewPageCss.page}>
                <div className={NewPageCss.page1}>
                <Layout>
                    <Header>
                        <Row>
                            <Col span={1}></Col>
                            <Col span={20}><a href="/homepage">首页</a></Col>
                            <Col span={1}>

                            <div id="components-dropdown-demo-dropdown-button">
                                <Dropdown overlay={menu}>
                                <Button className={NewPageCss.button}>
                                    返回 <Icon type="down" />
                                </Button>
                                </Dropdown>
                            </div>

                            </Col>
                        </Row>                 
                    </Header>
                    <Content>
                        <Row>
                        <Col span={3}>
                        
                        </Col>
                        <Col span={18}>
                        <h2>我们的善行</h2>
                        </Col>
                        <Col span={1}></Col>
                        </Row>
                    <div className={NewPageCss.page2}></div>
                        <Row>
                        <Col span={2}></Col>
                        <Col span={1}>
                            <div className={NewPageCss.iconl}>
                            <Icon  style={{fontSize:'50px' } } />
                            </div>
                        </Col>
                        <Col span={19}>
                            <div className>
                            <Carousel autoplay>
                            <div className={NewPageCss.picture}>
                                <img src="/picture.jpg"></img>
                            </div>
                            <div className={NewPageCss.picture}>
                                <img src="/picture2.jpg"></img>
                            </div>
                            <div className={NewPageCss.picture}>
                                <img src="/picture3.png"></img>
                            </div>

                            </Carousel>
                            </div>
                       
                        </Col>
                        <Col span={1}>
                        <div className={NewPageCss.iconr}>
                        <Icon  style={{fontSize:'50px' }} />
                            </div>
                        </Col>
                        </Row>
                        </Content>
                        
                        <Footer>
                            <div>
                            <Row>
                                <Col span={3}> </Col>
                                <Col span={6}>
                                    <h2>图墙</h2>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel} src="/p1.jpg"/>}>
                                    <Meta title="海边" description="志愿" />
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel1} src="/p2.png"/>}>
                                    <Meta title="老人" description="志愿" />
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel2} src="/p3.png"/>}>
                                    <Meta title="老人" description="志愿" />
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel3} src="/p4.png"/>}>
                                    <Meta title="风景" description="志愿" />
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel4} src="/p5.jpg"/>}>
                                    <Meta title="儿童" description="志愿" />
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel5} src="/p6.jpg"/>}>
                                    <Meta title="大标题" description="志愿" />
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel6} src="/p7.jpg"/>}>
                                    <Meta title="大标题" description="志愿" />
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel7} src="/p8.jpg"/>}>
                                    <Meta title="大标题" description="志愿" />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel8} src="/p9.png"/>}>
                                    <Meta title="大标题" description="志愿" />
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel8} src="/p10.png"/>}>
                                    <Meta title="大标题" description="志愿" />
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel8} src="/p11.jpg"/>}>
                                    <Meta title="大标题" description="志愿" />
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel8} src="/p12.jpg"/>}>
                                    <Meta title="大标题" description="志愿" />
                                    </Card>
                                </Col>
                            </Row>
                            </div>
                        </Footer>
                    </Layout>
                </div>
            </div>
        )
        }
    }