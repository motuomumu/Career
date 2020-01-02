import React from 'react'
import { Row, Col, PageHeader, Input, DatePicker, Button ,notification, Form, message} from 'antd'
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
        '已取消报名',
    });
  };

export default class Enlist extends React.Component {

    // state={
    //     username:'',
    //     birthday:'',
    //     address:'',
    //     spacetime:'',
    //     hopetime:'',
    //     textbox:'',

    //     confirmDirty:false,
    //     autoCompleteResult: [],
    // };
    // enlist=()=>{
    //     console.log(this.state)
    // }
    // handleSumbit = e =>{
    //     e.preventDefault();
    //     this.props.form.validateFieldsAndScroll((err,values)=>{
    //         if(!err){
    //             console.log('Received values of form:' ,values);
    //             const {username,birthday,address,spacetime,hopetime,textbox} = values
    //             enList().then(response => {
    //                 console.log('success',response.date)
    //             }).catch(error=>{
    //                 console.log('fail',error)
    //             })
    //         }else{
    //             console.log('失败')
    //         }
    //     });
    // }
        constructor(props){
            super(props);
            this.state={}
        }
        changeValue=(e)=>{
            this.setState({
                [e.target.mane]:e.target
            })
        }
        enlist=()=>{
            var xhr = new XMLHttpRequest()
            var data={
                "username":this.state.username,
                "birthday":this.state.birthday,
                "telenumber":this.state.telenumber,
                "address":this.state.address,
                "spacetime":this.state.spacetime,
                "hopetime":this.state.hopetime
            }
            xhr.open("post","/enlist")

            xhr.onreadystatechange=function() {
                if (xhr.readyState==4) {
                    if (xhr.status==200) {
                        message.info(xhr.responseText)
                        console.log(xhr.responseText)
                        var result = JSON.parse(xhr.responseText)
                        if (result.state==2) {
                            message.info("有未填完整的表格信息")
                        }else if (result.state==1) {
                            message.info("提交成功！")
                            this.props.history.push("/homepage")
                        }
                    }else{
                        message.info(xhr.status)
                    }
                }
            }
            xhr.setRequestHeader('content-type','application/json')
            console.log(JSON.stringify(data))
            xhr.send(JSON.stringify(data))
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
                                            subTitle="这里是填表报名处" />
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
                                <h2>报名表单</h2><br />
                                姓名：<Input className={enlistCss.input1} placeholder="请输入真实姓名" value={this.state.username} onChange={e=>this.changeValue(e)}/><br/><br/>
                                生日：<DatePicker onChange={onChange2} className={enlistCss.input1} placeholder="请选择您的出生日期" value={this.state.birthday} onChange={e=>this.changeValue(e)}/><br/><br/>
                                电话号码：<Input className={enlistCss.input1} placeholder="请输入您的电话号码" value={this.state.telenumber} onChange={e=>this.changeValue(e)}/><br/><br/>
                                地址：<Input className={enlistCss.input1} placeholder="请输入您的住址" value={this.state.value} onChange={e=>this.changeValue(e)}/><br/><br/>
                                空闲时间段：<DatePicker.RangePicker
                                    showTime={{ format: 'HH:mm' }}
                                    format="YYYY-MM-DD HH:mm"
                                    placeholder={['开始时间', '结束时间']}
                                    onChange={onChange}
                                    onOk={onOk}
                                    value={this.state.spacetime}
                                    onChange={e=>this.changeValue(e)}
                                /><br/><br/>
                                期望活动时间：<DatePicker.RangePicker
                                    showTime={{ format: 'HH:mm' }}
                                    format="YYYY-MM-DD HH:mm"
                                    placeholder={['开始时间', '结束时间']}
                                    onChange={onChange}
                                    onOk={onOk}
                                    value={this.state.hopetime}
                                    onChange={e=>this.changeValue(e)}
                                /><br/><br/>
                                <div className={enlistCss.buttonbox}>
                                    <Row>
                                        <Col span={5}></Col>
                                        <Col span={7}>
                                            <Button className={enlistCss.button} type="primary" onClick={this.enlist}>
                                                <Link to="/user/end">提交</Link>
                                            </Button>
                                        </Col>
                                        <Col span={7}>
                                            <Button onClick={() => openNotificationWithIcon('error')} className={enlistCss.button} type="primary">
                                                <Link to="/user/details">取消</Link>
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