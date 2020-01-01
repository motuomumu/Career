import React from 'react';
import {Empty, Pagination} from 'antd';

var JoinPageCss = require ('./join.css')
export default class JoinPage extends React.Component{
    render(){
        return(
            <div className={JoinPageCss.font}>
                暂未加入组织
                
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
                <Pagination defaultCurrent={1} total={1}></Pagination>
            </div>
        )
    }
}