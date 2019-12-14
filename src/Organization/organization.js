import React from 'react'
import {Layout,Row,Col,Card,Menu,Icon} from 'antd'

const{SubMenu}=Menu;
const{Meta} =Card;
const{Header,Footer,Content} = Layout;
var OrganizationPageCss = require('./organization.css') 

export default class OrganizationPage extends React.Component{
    handleClick = e =>{
        console.log('click',e);
    };
    render(){
        return(
            <div className={OrganizationPageCss.header}>
                 <Layout >
                    <Header >
                      <Row>
                        <Col span={3}></Col>
                        <Col span={10}></Col>
                        <Col span={5}></Col>
                        <Col span={3}>
                          <div className={OrganizationPageCss.pl}>
                            <a href='../../personal' > 个人中心</a>
                          
                          </div>
                        </Col>
                      </Row>
                    </Header>
                    <div className={OrganizationPageCss.bg1} ><img src="/v2.jpg" ></img></div>
                    <Content>
                    
                    <Row>
                                <Col span={5}> 
                                <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    
                                
                                
                                
                                </Col>
                                
                                <Col span={6}>
                                    
                                    <Card 
                                    hoverable
                                    style={{width: 320 }}
                                    cover={<img className={OrganizationPageCss.panel} src="/picture.jpg"/>}>
                                    
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 320 }}
                                    cover={<img className={OrganizationPageCss.panel1} src="/1.jpg"/>}>
                                
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 320 }}
                                    cover={<img className={OrganizationPageCss.panel2} src="/3.jpg"/>}>
                                
                                    </Card>
                                   
                                </Col>
                                <Col span={6}>
                                    <Card 
                                    hoverable
                                    style={{width: 320 }}
                                    cover={<img className={OrganizationPageCss.panel4} src="/picture.jpg"/>}>
                                
                                    </Card>
                                    <Card 
                                    hoverable
                                    style={{width: 320 }}
                                    cover={<img className={OrganizationPageCss.panel5} src="/v2..jpg"/>}>
                              
                                    </Card>
                                    
                                    
                                </Col>
                                <Col span={6}>
                                    <Card 
                                    hoverable
                                    style={{width: 320 }}
                                    cover={<img className={OrganizationPageCss.panel8} src="/v7.jpg"/>}>
                                   
                                    </Card>
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