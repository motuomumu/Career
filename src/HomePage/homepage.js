import React from 'react'
import { Row, Col, Icon, Menu, Dropdown, Input, Avatar, Button, Popconfirm, message, Carousel } from 'antd'
import { Link } from 'react-router-dom'
import img1 from '../Image/img1.jpg'
import img2 from '../Image/img2.jpg'
import img3 from '../Image/img3.jpg'
import img4 from '../Image/img4.jpg'
import img5 from '../Image/img5.jpg'
import img6 from '../Image/img6.jpg'
import img7 from '../Image/art1.png'
import china from '../Image/中国地图.png'
import { formateDate } from './dataUtils'
import { reqWeather } from '../api'

var HomepageCss = require("./homepage.css")

const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/organization">组织机构</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="news">时事新闻</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="new">图墙展示</Link>
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

// const menu1 = (
//     <Menu>
//         <Menu.Item>
//             <Link to="">关于我们</Link>
//         </Menu.Item>
//         <Menu.Item>
//             <Link to="">联系我们</Link>
//         </Menu.Item>
//         <Menu.Item>
//             <Link to="">反馈</Link>
//         </Menu.Item>
//         <Menu.Item>
//             <Link to="">待定</Link>
//         </Menu.Item>
//     </Menu>
// );

const menu2 = (
    <Menu>
        <Menu.SubMenu title="注册">
            <Menu.Item><Link to="/register">机构</Link></Menu.Item>
            <Menu.Item><Link to="/register">志愿者</Link></Menu.Item>
        </Menu.SubMenu>
        <Menu.Item>
            <Link to="/login">登陆</Link>
        </Menu.Item>
    </Menu>
);

export default class Homepage extends React.Component {

    state = {
        currentTime: formateDate(Date.now()),//当前时间的字符串
        // dayPictureUrl: '',
        // weather: '',
    }
    getTime = () => {
        //每隔一秒获取当前时间，并更新当前时间数据currentTime
        setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState({ currentTime })
        }, 1000)
    }
    // getWeather= async ()=>{
    //     //调用接口请求异步获取数据
    //     const {dayPictureUrl,weather}=await reqWeather('北京')
    //     //更新状态
    //     this.setState({dayPictureUrl,weather})
    // }
    /*
    获取每秒的时间
    第一次render后执行一次
    执行异步操作：发送ajax请求，启动定时器
    */
    componentDidMount() {
        //获取当前时间
        this.getTime()
        //获取当前天气
        // this.getWeather()
    }


    render() {

        const { currentTime, dayPictureUrl, weather } = this.state
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
                            <Dropdown overlay={menu2}>
                                <Link className="ant-dropdown-link" trigger={['click']}>
                                    <Avatar icon="user" size="large" />
                                </Link>
                            </Dropdown>
                        </Col>
                        <Col span={3}>
                            <Dropdown >
                            
                                <Button type="ghost"><Link to="">关于我们</Link></Button>
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
                                        <Col span={6}>
                                            <div className={HomepageCss.timebox}>
                                                <div className={HomepageCss.timemove}></div>
                                                {currentTime}
                                            </div>
                                        </Col>
                                        <Col span={8}></Col>
                                        <Col span={8}>
                                            <p><strong>Volunteers</strong></p>
                                            <Button type="primary"><Link to="/details">查看详情</Link></Button>
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
                    <Row>
                        <Col span={2}></Col>
                        <Col span={6}>
                            <div className={HomepageCss.box}>
                                <div className={HomepageCss.leader}>
                                    <img src={img1} height={600} width={380} className={HomepageCss.change1}></img>
                                </div>
                                <div className={HomepageCss.hide1}>
                                    <img src={img7}></img>
                                    <Row>
                                        <Col span={2}></Col>
                                        <Col span={20}>
                                            <p>平凡如我，独守着残缺的孤傲，在高耸的山崖吹风。像一只翅膀受伤的鹰，渴望翱翔</p>
                                            <p>你笑着站在那里，不卑不亢，以至于路过你的人，也都纷纷微笑起来。你会活得很好，就像一场春雪后，也像一阵夏雨诗</p>
                                        </Col>
                                        <Col span={2}></Col>
                                    </Row>
                                    <Button type="primary">报名</Button>
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
                                        <img src={img3} height={600} width={380}></img>
                                    </div>
                                    <div>
                                        <img src={img4} height={600} width={380}></img>
                                    </div>
                                    <div>
                                        <img src={img5} height={600} width={380}></img>
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={6}>
                            <div className={HomepageCss.imgbox1}>
                                <img src={img6} height={600} width={380}></img>
                            </div>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </div>


                <div className={HomepageCss.fly}>
                    <img src={HomepageCss.pi}></img>
                </div>

                <div className={HomepageCss.map}>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={10}>
                            <div className={HomepageCss.character}>
                                <h1>在中国的角落寻找你的足迹</h1>
                                <br />
                                <p>无论你从哪里来，又或者去向何方</p>
                                <br />
                                <p>都请勇敢的向前一步</p>
                                <br />
                                <p>善行图从世界各地为志愿者们寻找安全、有趣又充满挑战与价值的志愿者项目，
                                    让你可以充分的体现自我的价值。
                                </p>
                                <br />
                                <p>加入我们，你将会接受世界爱的赠礼与自然真诚的回馈</p>
                                <br />

                                <Button type="dashed">
                                    <Link to="/login">
                                        <p>加入我们</p>
                                    </Link>
                                </Button>
                            </div>
                        </Col>
                        <Col span={11}>
                            <img src={china} height={450} width={680} className={HomepageCss.china}></img>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </div>
                <div className={HomepageCss.mix}>
                    
                    <Row>
                        <Col span={2}></Col>
                        
                        <Col span={9}>
                        <Carousel autoplay>
                            <div className={HomepageCss.picture}>
                                 <img src="./h8.jpg"></img>
                            </div>
                            <div className={HomepageCss.picture}>
                                <img src="./h1.jpg"></img>
                            </div>
                            <div className={HomepageCss.picture}>
                                 <img src="./h4.jpg"></img>
                            </div>
                            <div className={HomepageCss.picture}>
                                <img src="./h9.png"></img>
                            </div>
                            </Carousel>
                        </Col>
                        <Col span={2}></Col>
                        <Col span={9}>
                        <Carousel autoplay>
                            <div className={HomepageCss.statement1}>
                                <p>在光芒万丈之前，我们都要欣然接受眼下的难堪和不易，接受一个人的孤独和偶尔的无助。</p>
                            </div>
                            <div className={HomepageCss.statement1}>
                                <p>别忘了答应自己要做的事，别忘了答应自己要去的远方，无论有多难，无论有多远。</p>
                            </div>
                            <div className={HomepageCss.statement1}>
                                <p>不怕千万人阻挡，只怕自己投降。永远要活给自己看，而且笑容要特别灿烂。</p>
                            </div>
                            <div className={HomepageCss.statement1}>
                                <p>不管你经历多痛的事情，到最后都会渐渐遗忘。没有什么能敌得过时光。</p>
                            </div>
                            <div className={HomepageCss.statement1}>
                                <p>给自己一些时间，原谅做过很多傻事的自己。接受自己，爱自己；要相信，过去的都会过去
                            ，该来的都在路上。</p>
                            </div>
                            
                            </Carousel>
                        </Col>
                        
                        
                        
                        <Col span={1}></Col>
                    </Row>
                    
                </div>


                <div className={HomepageCss.below}>
                    <Row type="flex" justify="center">
                        <Col span={3}></Col>

                        <Col span={5}>
                            <h3>zhangmaolin</h3>
                            <h3>123456789</h3>
                            <img src="/erweima.jpg" width={'60'} height={'60'}></img>
                        </Col>

                        <Col span={5}>
                            <h3>zengzhuhong</h3>
                            <h3>123456789</h3>
                            <img src="/erweima.jpg" width={'60'} height={'60'}></img>
                        </Col>

                        <Col span={5}>
                            <h3>lilan</h3>
                            <h3>123456789</h3>
                            <img src="/erweima.jpg" width={'60'} height={'60'}></img>
                        </Col>

                        <Col span={5}>
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
