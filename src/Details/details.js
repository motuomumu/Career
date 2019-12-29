import React from 'react'
import { Row, Col, Input, Button, Menu, Dropdown, Icon, Carousel, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import Homepage from '../HomePage/homepage';
import img1 from '../Image/孤儿院.jpg'
import img2 from '../Image/福利院.jpg'
import extra1 from '../Image/图9.jpg'
import extra2 from '../Image/养老院.jpg'

var detailsCss = require('../Details/details.css')

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link to="/">功能1</Link>
        </Menu.Item>
        <Menu.Item key="1">
            <Link to="/">功能2</Link>
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
                                                <img src={img2} height={380} width={800}></img>
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
                                            成都东站春节志愿活动
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
                                                                <p>成都市少年志愿者服务平台</p>
                                                            </Col>
                                                            <Col span={2}></Col>
                                                        </Row>
                                                    </div>
                                                    <div className={detailsCss.volunteer2}>
                                                        <Row>
                                                            <Col span={1}></Col>
                                                            <Col span={6}>机构介绍：</Col>
                                                            <Col span={15}>自2015年设立以来，成都市少年志愿者服务平台在政府部门、社会
                                                            公益人士的支持下以及广大学生及家长的积极参与下，获得了长足发展。 截止到2016年
                                                            1月底，在成都市少年志愿者服务平台注册的少年志愿者已逾五千人，每周都有上百个服
                                                            务队向社会提供志愿服务。成都市少年志愿者服务平台已成为四川省活跃志愿者最多的公
                                                            益服务团队。</Col>
                                                            <Col span={2}></Col>
                                                        </Row>
                                                    </div>
                                                    <div className={detailsCss.buspace}></div>
                                                    <div className={detailsCss.enlist}>
                                                        <Link to="/enlist">
                                                            <Button type="primary" className={detailsCss.actual}>点我报名</Button>
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
                                                            <div className={detailsCss.title3}><strong>活动内容简介</strong></div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className={detailsCss.introduce}>
                                                    <Row>
                                                        <Col span={2}></Col>
                                                        <Col span={20}>
                                                            <div className={detailsCss.active}>
                                                                <p>“温暖回家路”</p>
                                                                客运大厅内，志愿者每天凌晨4:45分开始上岗，活跃在车站的安检区，服务台，检票
                                                                口及候车大厅等地，他们在人流中穿梭，为买票、候车的旅客提供信息咨询、网上取票、
                                                                秩序引导、行李运送、照顾老幼等春运便民志愿服务，并积极引导旅客文明乘车，提醒
                                                                他们注意安全，积极为过往旅客排忧解难。志愿者：“上海这几天天气虽然很冷，但是为了
                                                                让旅客可以顺利平安回家，就算再冷，我们也不怕辛苦，不怕累。”
                                                            <h3>“活动时间”：2020年01月21日~2020年01月24日</h3>
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
                                                        <Col span={3}>评论(5)</Col>
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
                                                                                <Link to="/" className={detailsCss.link}>
                                                                                    <Avatar icon="user"></Avatar> Karry
                                                                                </Link>{/* 此处链接至个人中心 */}
                                                                            </div>
                                                                        </Col>
                                                                        <Col span={20}>去年参加过这个志愿者活动，非常棒。看着旅客们拿着热乎乎的水
                                                                        对我们露出笑容时心里特别高兴，这次志愿者活动我还是会继续参加的。</Col>
                                                                    </Row>
                                                                </div>
                                                            </div>
                                                            <div className={detailsCss.users}>
                                                                <div className={detailsCss.userspace}></div>
                                                                <div className={detailsCss.usercontent}>
                                                                    <Row>
                                                                        <Col span={4}>
                                                                            <div className={detailsCss.usertitle}>
                                                                                <Link to="/" className={detailsCss.link}>
                                                                                    <Avatar icon="user"></Avatar> parose
                                                                                </Link>{/* 此处链接至个人中心 */}
                                                                            </div>
                                                                        </Col>
                                                                        <Col span={20}>寒假放假期间多少会有些无聊，所以我选择了参加上次的同类志愿者活动。
                                                                        期待这次寒假也能够再次参加此次活动，帮助更多需要帮助的人。</Col>
                                                                    </Row>
                                                                </div>
                                                            </div>
                                                            <div className={detailsCss.users}>
                                                                <div className={detailsCss.userspace}></div>
                                                                <div className={detailsCss.usercontent}>
                                                                    <Row>
                                                                        <Col span={4}>
                                                                            <div className={detailsCss.usertitle}>
                                                                                <Link to="/" className={detailsCss.link}>
                                                                                    <Avatar icon="user"></Avatar> Anmicius
                                                                                </Link>{/* 此处链接至个人中心 */}
                                                                            </div>
                                                                        </Col>
                                                                        <Col span={20}>这是我参加过的最有意义的一次志愿活动，我们帮回家的旅客们拎
                                                                        着沉甸甸的箱子以及包裹，为上车的乘客提供晕车药，看见他们脸上的幸福感，我相信
                                                                        这段回忆会陪伴我度过很久的。</Col>
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
                                    类似活动推荐
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
                                                <h3><Link to="/details" className={detailsCss.link}>成都乡村支教活动</Link></h3>
                                            </div>
                                            <div>
                                                <h4>活动地点：成都附近的乡村小学</h4>
                                                <p>成都志愿者协会组织各大学生前往相对缺乏教师资源的成都周边乡村小学进行支教活动。</p>
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
                                                <h3><Link to="/details" className={detailsCss.link}>养老院志愿者活动</Link></h3>
                                            </div>
                                            <div>
                                                <h4>活动地点：四川省成都市锦江区经天路</h4>
                                                <p>成都志愿者协会组织想要进入养老院进行志愿活动的人来到养老院对居住的老人进行一系列关爱活动。</p>
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