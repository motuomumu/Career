import React from 'react'
import { Row, Col, Input, Button, Menu, Dropdown, Icon, Carousel, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import Homepage from '../Homepage/homepage';
import img1 from '../Image/00.jpg'
import extra1 from '../Image/就业.jpg'
import extra2 from '../Image/学生.jpg'

var detailsCss = require('../Details/details.css')

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link to="/homepage">返回首页</Link>
        </Menu.Item>
        <Menu.Item key="1">
            <Link to="">功能2</Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link to="/">功能3</Link>
        </Menu.Item>
    </Menu>
);

export default class Details extends React.Component {

    render() {
        return (
            <div className={detailsCss.all}>
                <div className={detailsCss.space}></div>
                <div className={detailsCss.title}>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={2}>
                            <Dropdown overlay={menu} trigger={['click']}>
                                <a className="ant-dropdown-link" href="#">
                                    <Button type="link"><Icon type="unordered-list" style={{ fontSize: '30px' }} /></Button>
                                </a>
                            </Dropdown>
                        </Col>
                        <Col span={2}>图标</Col>
                        <Col span={3}></Col>
                        <Col span={11}>
                            <Input.Search
                                placeholder="请输入想搜索的内容"
                                onSearch={value => console.log(value)}
                                style={{ width: 450 }}
                                className={detailsCss.input}
                            />
                        </Col>
                        <Col span={1}>
                            <Link to="/login">
                                <Button type="primary">登陆</Button>
                            </Link>
                        </Col>
                        <Col span={1} className={detailsCss.jiange}><span>|</span></Col>
                        <Col span={1}>
                            <Link to="/register">
                                <Button type="primary">注册</Button>
                            </Link>
                        </Col>
                    </Row>
                </div>
                <div className={detailsCss.space2}></div>
                <div className={detailsCss.content}>
                    <Row>
                        <Col span={14} className={detailsCss.left}>
                            <div className={detailsCss.pictures}>
                                <Row>
                                    <Col span={2}></Col>
                                    <Col span={20}>
                                        <Carousel autoplay>
                                            <div>
                                                <img src={img1} height={380} width={800}></img>
                                            </div>
                                            <div>
                                                <img src={img1} height={380} width={800}></img>
                                            </div>
                                            <div>
                                                <img src={img1} height={380} width={800}></img>
                                            </div>
                                            <div>
                                                <img src={img1} height={380} width={800}></img>
                                            </div>
                                        </Carousel>
                                    </Col>
                                    <Col span={2}></Col>
                                </Row>
                            </div>
                            <div className={detailsCss.name}>
                                <Row>
                                    <Col span={2}></Col>
                                    <Col span={20}>
                                        <div className={detailsCss.name1}>
                                            毕业生就业面试公司
                                        </div>
                                    </Col>
                                    <Col span={2}></Col>
                                </Row>
                            </div>
                            <div className={detailsCss.intro}>
                                <div className={detailsCss.space2}></div>
                                <div className={detailsCss.intro1}>
                                    <Row>
                                        <Col span={2}></Col>
                                        <Col span={9}>
                                            <div className={detailsCss.organization}>
                                                <div className={detailsCss.organ}>
                                                    <div className={detailsCss.orgspace}></div>
                                                    <div className={detailsCss.volunteer1}>
                                                        <Row>
                                                            <Col span={2}></Col>
                                                            <Col span={2}>
                                                                <Link to="/"><Avatar size="large" icon="book"></Avatar></Link>{/* 此处链接至组织主页 */}
                                                            </Col>
                                                            <Col span={1}></Col>
                                                            <Col span={16}>
                                                                <p>某某公司</p>
                                                            </Col>
                                                            <Col span={2}></Col>
                                                        </Row>
                                                    </div>
                                                    <div className={detailsCss.volunteer2}>
                                                        <Row>
                                                            <Col span={1}></Col>
                                                            <Col span={6}>公司介绍：</Col>
                                                            <Col span={15}>自2015年设立以来，成都市某某公司在政府部门、社会
                                                            </Col>
                                                            <Col span={2}></Col>
                                                        </Row>
                                                    </div>
                                                    <div className={detailsCss.buspace}></div>
                                                    <div className={detailsCss.enlist}>
                                                        <Link to="/enlist">
                                                            <Button type="primary" className={detailsCss.actual}>预约面试</Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={1}></Col>
                                        <Col span={10}>
                                            <div className={detailsCss.basic}>
                                                <div className={detailsCss.orgspace}></div>
                                                <div className={detailsCss.introducetitle}>
                                                    <Row>
                                                        <Col span={2}></Col>
                                                        <Col span={1}>
                                                            <div className={detailsCss.point}></div>
                                                        </Col>
                                                        <Col span={18}>
                                                            <div className={detailsCss.title3}><strong>招聘岗位介绍</strong></div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className={detailsCss.introduce}>
                                                    <Row>
                                                        <Col span={2}></Col>
                                                        <Col span={20}>
                                                            <div className={detailsCss.active}>
                                                                <p></p>
                                                              sdfghjkuiytrewqasdfgchjkilouytrewqertdfghjgfd
                                                              cgvhbjdrteswrtyuihjgcfxdsafg
                                                            <h3>“招聘截止时间”：2020年01月21日~2020年01月24日</h3>
                                                            </div>
                                                        </Col>
                                                        <Col span={2}></Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={2}></Col>
                                    </Row>
                                </div>
                            </div>
                            <div className={detailsCss.comment}>
                                <div className={detailsCss.comspace}></div>
                                <div className={detailsCss.comtitle}>
                                    <Row>
                                        <Col span={2}></Col>
                                        <Col span={20}>
                                            <div className={detailsCss.comcontent}>评论区</div>
                                        </Col>
                                        <Col span={2}></Col>
                                    </Row>
                                </div>
                                <div className={detailsCss.comspace}></div>
                                <div className={detailsCss.present}>
                                    <Row>
                                        <Col span={2}></Col>
                                        <Col span={20}>
                                            <div className={detailsCss.present2}>
                                                <div className={detailsCss.prespace}></div>
                                                <div className={detailsCss.pretitle}>
                                                    <Row>
                                                        <Col span={2}></Col>
                                                        <Col span={1}>
                                                            <Icon type="unordered-list" style={{ fontSize: '20px' }}></Icon>
                                                        </Col>
                                                        <Col span={3}>评论(3)</Col>
                                                        <Col span={18}></Col>
                                                    </Row>
                                                </div>
                                                <div className={detailsCss.presentcontent}>
                                                    <Row>
                                                        <Col span={1}></Col>
                                                        <Col span={22}>
                                                            <div className={detailsCss.users}>
                                                                <div className={detailsCss.userspace}></div>
                                                                <div className={detailsCss.usercontent}>
                                                                    <Row>
                                                                        <Col span={4}>
                                                                            <div className={detailsCss.usertitle}>
                                                                                <Link to="/center" className={detailsCss.link}>
                                                                                    <Avatar icon="user"></Avatar> Karry
                                                                                </Link>{/* 此处链接至个人中心 */}
                                                                            </div>
                                                                        </Col>
                                                                        <Col span={20}>这个公司是一家如何的公司这家公司是一家如何的公司
                                                                        这个公司是一家如何的公司这家公司是一家如何的公司</Col>
                                                                    </Row>
                                                                </div>
                                                            </div>
                                                            <div className={detailsCss.users}>
                                                                <div className={detailsCss.userspace}></div>
                                                                <div className={detailsCss.usercontent}>
                                                                    <Row>
                                                                        <Col span={4}>
                                                                            <div className={detailsCss.usertitle}>
                                                                                <Link to="/center" className={detailsCss.link}>
                                                                                    <Avatar icon="user"></Avatar> parose
                                                                                </Link>{/* 此处链接至个人中心 */}
                                                                            </div>
                                                                        </Col>
                                                                        <Col span={20}>这个公司是一家如何的公司这家公司是一家如何的公司
                                                                        这个公司是一家如何的公司这家公司是一家如何的公司。</Col>
                                                                    </Row>
                                                                </div>
                                                            </div>
                                                            <div className={detailsCss.users}>
                                                                <div className={detailsCss.userspace}></div>
                                                                <div className={detailsCss.usercontent}>
                                                                    <Row>
                                                                        <Col span={4}>
                                                                            <div className={detailsCss.usertitle}>
                                                                                <Link to="/center" className={detailsCss.link}>
                                                                                    <Avatar icon="user"></Avatar> Anmicius
                                                                                </Link>{/* 此处链接至个人中心 */}
                                                                            </div>
                                                                        </Col>
                                                                        <Col span={20}>这个公司是一家如何的公司这家公司是一家如何的公司
                                                                        这个公司是一家如何的公司这家公司是一家如何的公司
                                                                        这个公司是一家如何的公司这家公司是一家如何的公司</Col>
                                                                    </Row>
                                                                </div>
                                                            </div>
                                                            <div className={detailsCss.extram}>暂无更多评论</div>
                                                        </Col>
                                                        <Col span={1}></Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={2}></Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col span={10}>
                            <div className={detailsCss.extra}>
                                <div className={detailsCss.title2}>
                                    更多公司推荐
                                </div>
                                <div className={detailsCss.exspace}></div>
                                <div className={detailsCss.excontent}>
                                    <Row>
                                        <Col span={1}></Col>
                                        <Col span={14}>
                                            <div>
                                                <img src={extra1} height={300} width={370}></img>
                                            </div>
                                        </Col>
                                        <Col span={1}></Col>
                                        <Col span={7}>
                                            <div className={detailsCss.exspace2}></div>
                                            <div className={detailsCss.words}>
                                                <h3><Link to="/details" className={detailsCss.link}>某某公司</Link></h3>
                                            </div>
                                            <div>
                                                <h4>公司地点：成都金堂</h4>
                                                <p>这个公司是一家如何的公司这家公司是一家如何的公司</p>
                                            </div>
                                        </Col>
                                        <Col span={1}></Col>
                                    </Row>
                                </div>
                                <div className={detailsCss.exspace}></div>
                                <div className={detailsCss.excontent}>
                                    <Row>
                                        <Col span={1}></Col>
                                        <Col span={14}>
                                            <div>
                                                <img src={extra2} height={300} width={370}></img>
                                            </div>
                                        </Col>
                                        <Col span={1}></Col>
                                        <Col span={7}>
                                            <div className={detailsCss.exspace2}></div>
                                            <div className={detailsCss.words}>
                                                <h3><Link to="/details" className={detailsCss.link}>某某公司</Link></h3>
                                            </div>
                                            <div>
                                                <h4>公司地点：四川省成都市锦江区经天路</h4>
                                                <p>这个公司是一家如何的公司这家公司是一家如何的公司</p>
                                            </div>
                                        </Col>
                                        <Col span={1}></Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={detailsCss.tail}></div>
            </div>
        )
    }
}