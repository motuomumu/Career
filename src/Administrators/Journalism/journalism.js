import React from 'react'
import {Row,Col} from 'antd'
import { formateDate } from './dataUtils'

var JourCss = require('../Journalism/journalism.css')

export default class Journalism extends React.Component{
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
            <div className={JourCss.total}>
                <div className={JourCss.title}>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={17}>
                            <div className={JourCss.move}>
                                <p>新闻管理</p>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className={JourCss.move1}>
                                {currentTime}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}