import React from 'react'
import {Empty,Pagination} from 'antd'

var OnplayPageCss = require('./onplay.css')
export default class OnplayPage extends React.Component{
    render(){
        return(
            <div className={OnplayPageCss.font}>
                <div className={OnplayPageCss.nodata} style={{ padding: 50, background: '#fff', minHeight: 60, width: 230 }}>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
                <Pagination defaultCurrent={1} total={1}></Pagination>  
                </div>
            </div>
        )
    }
}