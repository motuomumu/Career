import React from 'react'
import { Icon } from 'antd';
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Input } from 'antd';

var HomepageCss = require('./homepage.css')
const { Search } = Input;
export default class Homepage extends React.Component {
    render() {
        return (
            <div className={HomepageCss.all}>

                <Row className={HomepageCss.first}>
                    <Row type="flex" justify="space-around" className={HomepageCss.first1}>
                    </Row>
                    <Row type="flex" justify="space-around">
                        <Col span={3}></Col>
                        <Col span={2}>名称</Col>
                        <Col span={7} >
                            <Search
                                placeholder="搜索"
                                onSearch={value => console.log(value)}
                                style={{ width: 250 }}
                            />
                        </Col>
                        <Col span={1}>
                            <Link to="" className={HomepageCss.chara}>首页</Link>
                        </Col>
                        <Col span={2}>
                            <Link to="" className={HomepageCss.chara}>我们的服务</Link>
                        </Col>
                        <Col span={2}>
                            <Link to="" className={HomepageCss.chara}>我们的动态</Link>
                        </Col>
                        <Col span={2}>
                            <Link to="" className={HomepageCss.chara}>联系我们</Link>
                        </Col>
                        <Col span={3}>

                        </Col>

                    </Row>

                </Row>

                <Row className={HomepageCss.second}>
                    <Col span={24}>
                        <Carousel autoplay className={HomepageCss.lun}>
                            <div>
                                <img src="/14.jpg" width={1224} height={380}></img>
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
                            <div>
                                <h3>5</h3>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
                <Row type="flex" justify="center" className={HomepageCss.third}>
                    <Col span={2}></Col>
                    <Col span={5}>
                        <div className={HomepageCss.one}>
                            <Icon type="home" style={{ fontSize: '40px' }} className={HomepageCss.one1} />
                            <p> 我的首页 </p>
                        </div>
                    </Col>
                    <Col span={5}>
                    <div className={HomepageCss.one}>
                            <Icon type="user" style={{ fontSize: '40px' }} className={HomepageCss.one1} />
                            <p>个人中心</p>
                        </div>
                    </Col>
                    <Col span={5}>
                    <div className={HomepageCss.one}>
                            <Icon type="sketch" style={{ fontSize: '40px' }} className={HomepageCss.one1} />
                            <p>会员中心</p>
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className={HomepageCss.one}>
                            <Icon type="phone" style={{ fontSize: '40px' }} className={HomepageCss.one1} />
                            <p>在客线服</p>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Row className={HomepageCss.fourth}>
                </Row>
            </div>
        )
    }
}