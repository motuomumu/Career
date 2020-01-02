import React from 'react'
import {Carousel} from 'antd'
import img1 from '../../Image/o1.jpg'
import img2 from '../../Image/o2.jpg'
import img3 from '../../Image/o3.jpg'

var IntroducePageCss = require('./introduce.css')
export default class IntroducePage extends React.Component{
    render(){
        return(
            <div className={IntroducePageCss.font}>
                <div style={{ padding: 50, background: '#fff', minHeight: 500, width: 900  }} className={IntroducePageCss.Carousel}>
                      <Carousel autoplay>
                        <div className={IntroducePageCss.Carousel1}>
                          <img src={img1}></img>
                        </div>
                        <div className={IntroducePageCss.Carousel1}> 
                          <img src={img2}></img>
                        </div>
                        <div className={IntroducePageCss.Carousel1}>
                          <img src={img3}></img>
                        </div>
                      </Carousel>
                    </div>  
            </div>
        )
    }
}