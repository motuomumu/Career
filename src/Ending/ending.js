import React from 'react'
import { Result, Button } from 'antd'
import {Link} from 'react-router-dom'

var endCss = require('../Ending/ending')

export default class Ending extends React.Component {

    render() {
        return (
            <div className={endCss.all}>
                <Result
                    status="success"
                    title="已成功提交申请"
                    subTitle="
                    请在之后的7个工作日内注意接收信息。"
                    extra={[
                        <Button type="primary" key="console">
                            <Link to="/user/center">返回个人中心</Link>
                        </Button>,
                        <Button key="buy"><Link to="/user/details">返回招聘</Link></Button>,
                    ]}
                />
            </div>
        )
    }
}