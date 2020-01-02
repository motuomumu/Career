import React from 'react'
import { Layout, Row, Col, Card, Menu, Icon, Button,Carousel } from 'antd'
import { Link, withRouter, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import OnplayPage from './Onplay/onplay'
import IntroducePage from './Introduce/introduce'


const { SubMenu } = Menu;
const { Meta } = Card;
const { Header, Footer, Content } = Layout;
var OrganizationPageCss = require('./organization.css')

class OrganizationPage extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {

    const path = this.props.location.pathname
    return (
      <div className={OrganizationPageCss.header}>
        
            <div className={OrganizationPageCss.headercontent}>
            <div className={OrganizationPageCss.background}>   
        <img src='/header2.jpg' className={OrganizationPageCss.background}></img>                          
        </div>
              <Row>
                <Col span={1}></Col>
                <Col span={2}><p><strong>组织中心</strong></p></Col>
                <Col span={1}><span>|</span></Col>
                <Col span={2}><p><strong>时事新闻</strong></p></Col>
                <Col span={1}><span>|</span></Col>
                <Col span={2}><p><strong>组织机构</strong></p></Col>
                <Col span={10}></Col>
                <Col span={2}><Link to="../"><p>个人中心</p></Link></Col>
                <Col span={1}><span>|</span></Col>
                <Col span={1}><Link to="/homepage"><p>登出</p></Link></Col>
                <Col span={2}></Col>
              </Row>
            </div>
          <Row>
            <Col span={2}></Col>
            <Col spa={18}>
              <div className={OrganizationPageCss.bg1} ><img src="/v2.jpg" width={1000} height={200}></img></div>
            </Col>
            <Col span={2}></Col>
          </Row>
          <div className={OrganizationPageCss.line}></div>
          <div className={OrganizationPageCss.Content}>
            <Row>
            <BrowserRouter basename="organization">
              <Col span={5}>
                <div style={{ width: 256 }}>
                  <Menu
                    defaultSelectedKeys={[path]}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme=""
                    inlineCollapsed={this.state.collapsed}
                  >
                    <Menu.Item key="1">
                      <Link to="/organization">
                        <Icon type="home" />
                        <span>首页</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/onplay">
                        <Icon type="desktop" />
                        <span>活动展示</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="/">
                      <Link to="/introduce">
                        <Icon type="inbox" />
                        <span>组织介绍</span>
                      </Link>
                    </Menu.Item>
                  </Menu>
                  <Switch>
                        <Route path="/onplay" component={OnplayPage}></Route>
                        <Route path="/introduce" component={IntroducePage}></Route>
                        
                        {/* <Redirect to='/'></Redirect> */}
                      </Switch>
                </div>
              </Col>
              </BrowserRouter>
              <Col span={6}>           
              </Col>
            </Row>
            </div>
      </div>
    )
  }
}

/*
withRouter:高阶组件
包装费路由组件，返回一个新的组件
新的组件向非路由组件传递3个属性：history location match
*/
export default withRouter(OrganizationPage)