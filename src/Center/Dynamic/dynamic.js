import React from 'react';
import {Pagination, Empty} from 'antd';

var DynamicPageCss = require('./dynamic.css')
export default class DynamicPage extends React.Component{
    render(){
        return(
            <div className={DynamicPageCss.font}>
                暂无数据
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
                <Pagination defaultCurrent={1} total={1}></Pagination>
            </div>
        )
    }
}