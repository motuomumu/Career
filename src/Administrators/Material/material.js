import React from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Input, Form} from 'antd'
import { formateDate } from './dataUtils'

var MaterCss = require('../Material/material.css')

export default class Material extends React.Component{
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

    render(){
        const { currentTime, dayPictureUrl, weather } = this.state
        return(
            <div className={MaterCss.total}>
                <div className={MaterCss.title}>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={17}>
                            <div className={MaterCss.move}>
                                <p>个人资料</p>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className={MaterCss.move1}>
                                {currentTime}
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={MaterCss.write}>
                    <Row>
                        <Col span={5}></Col>
                        <Col span={14}>
                            <Form>
                                <Form.Item label="姓名">
                                    <Input placeholder="请输入你的名字"/>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col span={5}></Col>
                    </Row>
                </div>
            </div>
        )
    }
}