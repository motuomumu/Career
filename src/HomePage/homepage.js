import React from 'react'
import { Row, Col, Icon, Menu, Dropdown, Input, Avatar, Button, Popconfirm, message, Carousel } from 'antd'
import { Link } from 'react-router-dom'
import img1 from '../Image/养老院.jpg'
import img2 from '../Image/孤儿院.jpg'
import img3 from '../Image/福利院.jpg'
import img4 from '../Image/图6.jpg'

var HomepageCss = require("../HomePage/homepage.css")

const menu = (
    <Menu>
        <Menu.Item>
            <Link to="">1st menu item</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="">2nd menu item</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="">3rd menu item</Link>
        </Menu.Item>
        <Menu.SubMenu title="城市">
            <Menu.Item>北京</Menu.Item>
            <Menu.Item>成都</Menu.Item>
            <Menu.Item>上海</Menu.Item>
            <Menu.Item>杭州</Menu.Item>
            <Menu.Item>长沙</Menu.Item>
            <Menu.Item>内江</Menu.Item>
        </Menu.SubMenu>
    </Menu>
);

function confirm(e) {
    console.log(e);
    message.success('已跳转至登录页面');
}

function cancel(e) {
    console.log(e);
    message.success('已跳转至注册页面');
}

const menu1 = (
    <Menu>
        <Menu.Item>
            <Link to="">关于我们</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="">联系我们</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="">反馈</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="">待定</Link>
        </Menu.Item>
    </Menu>
);



// const bgGround1 = {
//     display: 'inline-block',
//     height: '600px',
//     width: '100%',
//     background: 'url(' + img1 + ')'
// }
// const bgGround2 = {
//     display: 'inline-block',
//     height: '600px',
//     width: '100%',
//     background: 'url(' + img2 + ')'
// }
// const bgGround3 = {
//     display: 'inline-block',
//     height: '600px',
//     width: '100%',
//     background: 'url(' + img3 + ')'
// }

export default class Homepage extends React.Component {

    render() {
        return (
            <div className={HomepageCss.all}>
                <div className={HomepageCss.space}></div>
                <div className={HomepageCss.basic}>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={2}>图标</Col>
                        <Col span={2}>
                            <Dropdown overlay={menu}>
                                <Link className="ant-dropdown-link" trigger={['click']}>
                                    <Icon type="unordered-list" style={{ fontSize: '30px' }} />
                                </Link>
                            </Dropdown>
                        </Col>
                        <Col span={13}>
                            <Input.Search
                                placeholder="请输入想搜索的内容"
                                onSearch={value => console.log(value)}
                                style={{ width: 750 }}
                                className={HomepageCss.input}
                            />
                        </Col>
                        <Col span={2}>
                            <Popconfirm
                                title="需要跳转页面吗?"
                                onConfirm={confirm}
                                onCancel={cancel}
                                okText="登陆"
                                cancelText="注册"
                            >
                                <Button type="link">
                                    <Link to=""><Avatar icon="user" /></Link>
                                </Button>
                            </Popconfirm>
                        </Col>
                        <Col span={3}>
                            <Dropdown overlay={menu1}>
                                <Button type="ghost">了解我们</Button>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
                <div className={HomepageCss.introduce}>
                    <div className={HomepageCss.imgs}>
                        <Carousel autoplay>
                            <div className={HomepageCss.img01}>
                                <div className={HomepageCss.write1}>
                                    <Row>
                                        <Col span={2}></Col>
                                        <Col span={6}></Col>
                                        <Col span={8}></Col>
                                        <Col span={8}>
                                            <p><strong>Volunteers</strong></p>
                                            <Button type="primary">efcsdfsad</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div>
                                <div className={HomepageCss.img02}></div>
                            </div>
                            <div>
                                <div className={HomepageCss.img03}></div>
                            </div>
                            <div>
                                <div className={HomepageCss.img04}></div>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className={HomepageCss.card}>
                    <Row>.
                        <Col span={2}></Col>
                        <Col span={6}>
                            <div>
                                <div className={HomepageCss.leader}>
                                <img src={img1} height={600} width={380} className={HomepageCss.change1}></img>
                                </div>
                                
                                <div className={HomepageCss.hide1}>
                                    <Link to="/"><p>关爱老人<br/>从我做起</p></Link>
                                </div>
                            </div>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={6}>
                        <div className={HomepageCss.imgbox1}>
                                <Carousel autoplay>
                                    <div>
                                        <img src={img2} height={600} width={380}></img>
                                    </div>
                                    <div>
                                        <img src={img1} height={600} width={380}></img>
                                    </div>
                                    <div>
                                        <img src={img4} height={600} width={380}></img>
                                    </div>
                                    <div>
                                        <h3>4</h3>
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={6}>
                            <div className={HomepageCss.imgbox1}>
                                <img src={img3} height={600} width={380}></img>
                            </div>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </div>
                <div></div>
                <div></div>


                <div className={HomepageCss.below}>
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
                            <h3>wujiaxin</h3>
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
