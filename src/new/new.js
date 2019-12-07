import React from 'react';
import {Row,Col,Icon,Layout,Carousel,Card} from 'antd'


const { Header, Footer, Sider, Content } = Layout;
var NewPageCss = require("./new.css")
function onChange(a, b, c) {
    console.log(a, b, c);
  }
window.onload=function(){
    var info = document.getElementById("")
}
const {Meta} =Card;
export default class NewPage extends React.Component{
    render(){
        return(
            <div className={NewPageCss.page}>
                <div className={NewPageCss.page1}>
                <Layout>
                    <Header></Header>
                    <Content>
                        <Row>
                        <Col span={4}>
                        
                        </Col>
                        <Col span={18}>
                        <h1>展示</h1>
                        <h2>我们的善行</h2>
                        </Col>
                        <Col span={1}></Col>
                        </Row>
                    <div className={NewPageCss.page2}></div>
                        <Row>
                        <Col span={2}></Col>
                        <Col span={1}>
                            <div className={NewPageCss.iconl}>
                            <a id="prev" href=""><Icon type="left" style={{fontSize:'50px' }} /></a>
                            </div>
                        </Col>
                        <Col span={19}>
                            <div className>
                            <Carousel afterChange={onChange}>
                            <div className={NewPageCss.picture}>
                                <img src="/picture.jpg"></img>
                            </div>
                            <div className={NewPageCss.picture}>
                                <img src="/picture2.jpg"></img>
                            </div>
                            <div className={NewPageCss.picture}>
                                <img src="/picture3.jpg"></img>
                            </div>

                            </Carousel>
                            </div>
                       
                        </Col>
                        <Col span={1}>
                        <div className={NewPageCss.iconr}>
                        <a id="prev" href=""><Icon type="right" style={{fontSize:'50px' }} /></a>
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
                                    cover={<img className={NewPageCss.panel} src="/picture5.jpg"/>}>
                                    <Meta title="大标题" description="bangbangbang" />
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel1} src="/1.jpg"/>}>
                                    <Meta title="大标题" description="bangbangbang" />
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel2} src="/3.jpg"/>}>
                                    <Meta title="大标题" description="bangbangbang" />
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel3} src="/bg.jpg"/>}>
                                    <Meta title="大标题" description="bangbangbang" />
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel4} src="/picture3.jpg"/>}>
                                    <Meta title="大标题" description="bangbangbang" />
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel5} src="/4.jpg"/>}>
                                    <Meta title="大标题" description="bangbangbang" />
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel6} src="/picture5.jpg"/>}>
                                    <Meta title="大标题" description="bangbangbang" />
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel7} src="/picture.jpg"/>}>
                                    <Meta title="大标题" description="bangbangbang" />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card 
                                    hoverable
                                    style={{width: 340 }}
                                    cover={<img className={NewPageCss.panel8} src="/picture5.jpg"/>}>
                                    <Meta title="大标题" description="bangbangbang" />
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