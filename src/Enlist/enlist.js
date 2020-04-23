import React from 'react'
import { Row, Col, PageHeader, Input, DatePicker, Button ,notification, Form} from 'antd'
import { Link } from 'react-router-dom'

var enlistCss = require('../Enlist/enlist.css')

function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
    console.log('onOk: ', value);
}

function onChange2(date, dateString) {
    console.log(date, dateString);
  }

  const openNotificationWithIcon = type => {
    notification[type]({
      message: '已取消',
      description:
        '已取消预约',
    });
  };

export default class Enlist extends React.Component {
        constructor(props){
            super(props);
            this.state={}
        }
        changeValue=(e)=>{
            this.setState({
                [e.target.mane]:e.target
            })
        }

    render() {

        return (
            <div className={enlistCss.all}>
                <div className={enlistCss.title}>
                    <div className={enlistCss.space}></div>
                    <div className={enlistCss.content}>
                        <Row>
                            <Col span={6}>
                                <div>
                                    <Link>
                                        <PageHeader onBack={() => window.history.back()}
                                            title="返回"
                                            subTitle="预约面试表" />
                                    </Link>
                                </div>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={2}></Col>
                            <Col span={14}></Col>
                        </Row>
                    </div>
                </div>
                <div className={enlistCss.space2}></div>
                <div className={enlistCss.form}>
                    <Row>
                        <Col span={5}></Col>
                        <Col span={14}>
                            <div className={enlistCss.form1}>
                                <div className={enlistCss.space}></div>
                                <h2>预约面试</h2><br />
                                姓名：<Input className={enlistCss.input1} placeholder="请输入真实姓名"/><br/><br/>
                                电话号码：<Input className={enlistCss.input1} placeholder="请输入您的电话号码"/><br/><br/>
                                地址：<Input className={enlistCss.input1} placeholder="请输入您的住址"/><br/><br/>
                                <div className={enlistCss.buttonbox}>
                                    <Row>
                                        <Col span={5}></Col>
                                        <Col span={7}>
                                            <Button className={enlistCss.button} type="primary">
                                                <Link to="/end">提交</Link>
                                            </Button>
                                        </Col>
                                        <Col span={7}>
                                            <Button onClick={() => openNotificationWithIcon('error')} className={enlistCss.button} type="primary">
                                                <Link to="/details">取消</Link>
                                            </Button>
                                        </Col>
                                        <Col span={5}></Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col span={5}></Col>
                    </Row>
                </div>
                <div className={enlistCss.tail}></div>
            </div>
        )
    }
}