import React from 'react'


var IntroducePageCss = require('./introduce.css')
export default class IntroducePage extends React.Component{
    render(){
        return(
            <div className={IntroducePageCss.font}>
                个人资料卡  
            </div>
        )
    }
}