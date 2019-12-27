import React from 'react'


var ProfilePageCss = require('./profile.css')
export default class ProfilePage extends React.Component{
    render(){
        return(
            <div className={ProfilePageCss.font}>
                个人资料卡  
            </div>
        )
    }
}