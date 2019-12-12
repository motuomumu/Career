import React from 'react';
import {Row,Col,Layout,PageHeader,Card,Icon,Avatar,Carousel} from 'antd';

const {Meta} = Card;
var NewsPageCss = require('./news.css')

export default class NewsPage extends React.Component{
    render(){
        return(
            <div>
                <div>
                <div className={NewsPageCss.header}>
                <PageHeader
                    style={{border: '1px solid rgb(235, 237, 240)'}}
                        onBack={() =>window.history.back() }
                            title="返回主页"
                                subTitle="时事志愿新闻"
                 />,
                </div>
                <div className={NewsPageCss.title}>
                    <h3>欢迎来到善行网站</h3>
                </div>
                <span><a href='https://www.baidu.com/s?tn=news&rtt=1&bsst=1&wd=%E5%BF%97%E6%84%BF%E8%80%85%E6%96%B0%E9%97%BB&cl=2&origin=ps'> 时事新闻</a> </span>
                <div>
                <div className={NewsPageCss.carousel}>
                    <Row>
                        <Col span={5}></Col>
                        <Col span={18}>
                <Carousel autoplay>
                    <div>
                    <img src="/photo.jpg" height={600}></img>
                    </div>
                    <div>
                    <h3>2</h3>
                    </div>
                    <div>
                    <h3>3</h3>
                    </div>
                    <div>
                    <h3>4</h3>
                    </div>
                </Carousel>,
                </Col>
                <Col span={1}></Col>
                </Row>
                </div>

                <span>|</span>



                <div className={NewsPageCss.kernel} >
                    <Row type="flex" justify="center">
                        
                            <Col span={1}></Col>
                        <Col span={6}>
                           
                            <Card
                                style={{ width:360}} style={{ height:450}}
                                hoverable={true}
                                >
                                    <Meta       
                                        title="Card title"
                                        description="This is the description"
                                        />
                             </Card>,
                        </Col>
                            <Col span={1}></Col>
                        <Col span={6}>
                        <Card
                                style={{ width: 360 } } style={{ height: 450 }}
                                hoverable={true}
                                    >
                                        <Meta       
                                        title="Card title"
                                        description="This is the description"
                                        />
                                 </Card>,
                        </Col>  
                        <Col span={1}></Col>
                        <Col span={6}>
                        <Card
                                style={{ width: 360 }} style={{ height: 450 }}                                
                                hoverable={true}       
                                    >
                                        <Meta       
                                        title="Card title"
                                        description="This is the description"
                                        />
                            </Card>,
                        </Col>
                        <Col span={1}></Col>
                        
                    </Row>
                    </div>
                </div>
            </div>
            <div className={NewsPageCss.below}>
                    <Row type="flex" justify="center">
                        <Col span={3}></Col>

                        <Col span={4}>
                        <h3>zhangmaolin</h3>
                        <h3>123456789</h3>
                        <img src="/erweima.jpg" width={'60'} height={'60'}></img>                   
                        </Col>

                        <Col span={4}>
                        <h3>zengzhuhong</h3>
                        <h3>123456789</h3>
                        <img src="/erweima.jpg" width={'60'} height={'60'}></img>
                        </Col>

                        <Col span={4}>                   
                        <h3>lilan</h3>
                        <h3>123456789</h3>        
                        <img src="/erweima.jpg" width={'60'} height={'60'}></img>           
                        </Col>

                        <Col span={4}>                    
                        <h3>wangfei</h3>
                        <h3>123456789</h3>        
                        <img src="/erweima.jpg" width={'60'} height={'60'}></img>           
                        </Col>

                        <Col span={1}></Col>
                        </Row>
               
               
                </div> 
        </div>
        )
    }
}