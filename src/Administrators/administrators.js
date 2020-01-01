import React from 'react'
import {Row,Col,Icon} from 'antd'
import {Link,Route,Switch, Redirect} from 'react-router-dom'
import Initial from './Initial/initial'
import Material from './Material/material'
import Journalism from './Journalism/journalism'
import FormPage from './Form/form'
import Control from './Control/control'

var AdminCss = require('../Administrators/administrators.css')

export default class Administrators extends React.Component{

    render(){

        return(
            <div className={AdminCss.total}>
                <div className={AdminCss.content}>
                    <Row>
                        <Col span={5}>
                            <div className={AdminCss.list}>
                                <div className={AdminCss.logo}>
                                    <Row>
                                        <Col span={3}></Col>
                                        <Col span={7}>
                                            <div className={AdminCss.move}>
                                                <div className={AdminCss.pic}></div>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div className={AdminCss.move}>
                                                <div className={AdminCss.movep}>
                                                    <p><strong>善行图</strong></p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={2}></Col>
                                    </Row>
                                </div>
                                <div className={AdminCss.select}>
                                    <div className={AdminCss.option}>
                                        <Row>
                                            <Col span={3}></Col>
                                            <Col span={3}><Icon type="bank" className={AdminCss.icons}/></Col>
                                            <Col span={18}>
                                                <div className={AdminCss.linkmove}>
                                                    <Link to="/administrators/initial" className={AdminCss.links}><strong>首页</strong></Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={AdminCss.option}>
                                        <Row>
                                            <Col span={3}></Col>
                                            <Col span={3}><Icon type="code" className={AdminCss.icons}/></Col>
                                            <Col span={18}>
                                                <div className={AdminCss.linkmove}>
                                                    <Link to="/administrators/material" className={AdminCss.links}><strong>个人资料完善</strong></Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={AdminCss.option}>
                                        <Row>
                                            <Col span={3}></Col>
                                            <Col span={3}><Icon type="container" className={AdminCss.icons}/></Col>
                                            <Col span={18}>
                                                <div className={AdminCss.linkmove}>
                                                    <Link to="/administrators/journalism" className={AdminCss.links}><strong>新闻管理</strong></Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={AdminCss.option}>
                                        <Row>
                                            <Col span={3}></Col>
                                            <Col span={3}><Icon type="file-text" className={AdminCss.icons}/></Col>
                                            <Col span={18}>
                                                <div className={AdminCss.linkmove}>
                                                    <Link to="/administrators/form" className={AdminCss.links}><strong>接收的表单</strong></Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={AdminCss.option}>
                                        <Row>
                                            <Col span={3}></Col>
                                            <Col span={3}><Icon type="block" className={AdminCss.icons}/></Col>
                                            <Col span={18}>
                                                <div className={AdminCss.linkmove}>
                                                    <Link to="/administrators/control" className={AdminCss.links}><strong>志愿者活动信息管理</strong></Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={19}>
                            <div className={AdminCss.right}>
                                <div className={AdminCss.title}>
                                    <Row>
                                        <Col span={19}></Col>
                                        <Col span={3}>
                                            <div className={AdminCss.welcome}>欢迎，admin</div>
                                        </Col>
                                        <Col span={2}>
                                            <div className={AdminCss.exit}>
                                                <Link to="/login" className={AdminCss.exitlink}><Icon type="export" />&nbsp;&nbsp;退出</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={AdminCss.show}>
                                    <Switch>
                                        <Route path='/' exact component={Initial}></Route>
                                        <Route path='/administrators/control' component={Control}></Route>
                                        <Route path="/administrators/form" component={FormPage}></Route>
                                        <Route path="/administrators/initial" component={Initial}></Route>
                                        <Route path="/administrators/material" component={Material}></Route>
                                        <Route path="/administrators/journalism" component={Journalism}></Route>
                                    </Switch>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div></div>
            </div>
        )
    }
}