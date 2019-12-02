import React from 'react';
import {Row,Col,Layout,PageHeader,Card,Icon,Avatar} from 'antd';

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
                        onBack={() => null}
                            title="Title"
                                subTitle="This is a subtitle"
                 />,
                </div>
                <div className={NewsPageCss.title}>
                    <h3>今日志愿新闻</h3>
                </div>
                <div>
                    <Row>
                        <div className={NewsPageCss.kernel}>
                        <Col span={8}>
                           
                            <Card
                                style={{ width:360}} style={{ height:450}}
                                
                                <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                              >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                              </Card>,
                            
 </Col>
                        <Col span={8}>
                        <Card
                                style={{ width: 360 } } style={{ height: 450 }}
                                    cover={
                                        <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
                                        }
                                        actions={[
                                        <Icon type="setting" key="setting" />,
                                        
                                        <Icon type="ellipsis" key="ellipsis" />,
                                        ]}
                                    >
                                        <Meta
                                        
                                        title="Card title"
                                        description="This is the description"
                                        />
  </Card>,
                        </Col>
                        <Col span={8}>
                        <Card
                                style={{ width: 360 }} style={{ height: 450 }}
                               
                                    cover={
                                        <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
                                        }
                                        actions={[
                                        <Icon type="setting" key="setting" />,
                                        
                                        <Icon type="ellipsis" key="ellipsis" />,
                                        ]}
                                    >
                                        <Meta
                                        
                                        title="Card title"
                                        description="This is the description"
                                        />
  </Card>,
                        </Col>
                        </div>
                    </Row>
                </div>
            </div>
        </div>
        )
    }
}