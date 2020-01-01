import React from 'react'
import { Layout, Row, Col, Card, Menu, Icon, Button } from 'antd'
import { Link, withRouter, Switch, Route, Redirect } from 'react-router-dom'
import NewsPage from '../News/news'
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
        <Layout >
          <Header >
            <div className={OrganizationPageCss.headercontent}>
              <Row>
                <Col span={1}></Col>
                <Col span={2}><p><strong>组织中心</strong></p></Col>
                <Col span={16}></Col>
                <Col span={2}><Link to="/center"><p>个人中心</p></Link></Col>
                <Col span={1}><span>|</span></Col>
                <Col span={1}><Link to="/homepage"><p>登出</p></Link></Col>
                <Col span={2}></Col>
              </Row>
            </div>
          </Header>
          <div className={OrganizationPageCss.bg1} ><img src="/v2.jpg" width={1500} height={200}></img></div>
          <Content>

            <Row>
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
                      <Link to='/organization'>
                        <Icon type="home" />
                        <span>首页</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="/news">
                      <Link to='/news'>
                        <Icon type="desktop" />
                        <span>活动展示</span>
                      </Link>

                    </Menu.Item>
                    <Menu.Item key="/news">
                      <Link to='/news'>
                        <Icon type="inbox" />
                        <span>Option 3</span>
                      </Link>
                    </Menu.Item>
                    <SubMenu
                      key="sub1"
                      title={
                        <span>
                          <Icon type="mail" />
                          <span>Navigation One</span>
                        </span>
                      }
                    >
                      <Menu.Item key="/news">
                        <Link to='/news'>
                          Option 5
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="6">
                        <Link to='/news'>
                          Option 6
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="7">
                        <Link to='/news'>
                          Option 7
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="8">
                        <Link to='/news'>
                          Option 8
                        </Link>
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      title={
                        <span>
                          <Icon type="appstore" />
                          <span>功能</span>
                        </span>
                      }
                    >
                      <Menu.Item key="9">客服</Menu.Item>
                      <Menu.Item key="10">反馈</Menu.Item>
                      <SubMenu key="sub3" title="更多">
                        <Menu.Item key="11">投诉</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                      </SubMenu>
                    </SubMenu>
                  </Menu>
                </div>
              </Col>

              <Col span={6}>
                <Layout>
                  <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 400, width: 900 }}>
                      <Switch>
                        <Route path='/news' component={NewsPage}></Route>
                        <Route path='/news' component={NewsPage}></Route>
                        <Route path='/news' component={NewsPage}></Route>
                        {/* <Redirect to='/'></Redirect> */}
                      </Switch>
                    </div>

                  </Content>
                  <Footer>SXT 善行图</Footer>
                </Layout>
                {/* <Card
                  hoverable
                  style={{ width: 320 }}
                  cover={<img className={OrganizationPageCss.panel} src="/picture.jpg" />}>

                </Card>
                <Card
                  hoverable
                  style={{ width: 320 }}
                  cover={<img className={OrganizationPageCss.panel1} src="/1.jpg" />}>

                </Card>
                <Card
                  hoverable
                  style={{ width: 320 }}
                  cover={<img className={OrganizationPageCss.panel2} src="/3.jpg" />}>

                </Card>

              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  style={{ width: 320 }}
                  cover={<img className={OrganizationPageCss.panel4} src="/picture.jpg" />}>

                </Card>
                <Card
                  hoverable
                  style={{ width: 320 }}
                  cover={<img className={OrganizationPageCss.panel5} src="/v2..jpg" />}>

                </Card>


              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  style={{ width: 320 }}
                  cover={<img className={OrganizationPageCss.panel8} src="/v7.jpg" />}>

                </Card> */}
              </Col>

            </Row>
          </Content>

          <Footer>

          </Footer>
        </Layout>
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