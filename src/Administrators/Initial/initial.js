import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import { formateDate } from './dataUtils'

var initialCss = require('../Initial/initial.css')

export default class Initial extends React.Component {

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
            <div className={initialCss.total}>
                <div className={initialCss.title}>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={17}>
                            <div className={initialCss.move}>
                                <p>首页</p>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className={initialCss.move1}>
                                {currentTime}
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={initialCss.show}>
                    <div className={initialCss.fix}>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={7}>
                                <div className={initialCss.controduce}>
                                    <div className={initialCss.census}>
                                        <Row>
                                            <Col span={18}>
                                                <div className={initialCss.address}>浏览页面总数</div></Col>
                                            <Col span={4}>
                                                <div className={initialCss.address}>
                                                    <p>70462</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={initialCss.concrete}>
                                        <Row>
                                            <Col span={2}></Col>
                                            <Col span={22}>
                                                <div className={initialCss.first}>
                                                    <p>今日访问人数：3546</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col span={1}></Col>
                            <Col span={14}>
                                <div className={initialCss.image}></div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}