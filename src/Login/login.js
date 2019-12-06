import React from 'react';
import {Row,Col,} from 'antd';



var LoginPageCss = require('./login.css')
export default class LoginPage extends React.Component{
    render(){
        return(
            <div>
                <div className={LoginPageCss.header}>
                    <div ><img src="/bg.jpg"></img></div>
                    <Row>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                        

                    </Row>
                </div>
            </div>
            
        )
    }
}