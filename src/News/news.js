import React from 'react';
import {Row,Col,Layout,PageHeader,Card,Icon,Avatar,Carousel} from 'antd';
import {Link} from 'react-router-dom'
import img1 from "../Image/01.jpg"
import img2 from "../Image/02.jpg"
import img3 from "../Image/03.jpg"
import img4 from "../Image/04.jpg"

const {Meta} = Card;
var NewsPageCss = require('./news.css')

export default class NewsPage extends React.Component{
    render(){
        return(
            <div>
                <div>
                <div className={NewsPageCss.background}>                        
                    <img src="./nb2.jpg" className={NewsPageCss.background}></img>
                </div>
                <div className={NewsPageCss.header}>
                    <PageHeader style={{border: '1px solid rgb(235, 237, 240)'}} onBack={() =>window.history.back() }
                            title="返回主页"  subTitle="时事志愿新闻" extra={[<Icon type="experiment" className={NewsPageCss.experiment} style={{fontSize: '32px'}}/>]} >
                            
                    </PageHeader>
                </div>
                <div className={NewsPageCss.title}>
                    <h3>欢迎来到善行网站</h3>
                </div>
                


                <div>
                <div className={NewsPageCss.carousel}>
                    <Row>
                        <Col span={5}></Col>
                        <Col span={18}>
                <Carousel autoplay>
                    <div>
                    <img src={img1} height={600}></img>
                    </div>
                    <div>
                    <img src={img2} height={600}></img>
                    </div>
                    <div>
                    <img src={img3} height={600}></img>
                    </div>
                    <div>
                    <img src={img4} height={600}></img>
                    </div>
                </Carousel>,
                </Col>
                <Col span={1}></Col>
                </Row>
                </div>

                <span>|</span>



                <div className={NewsPageCss.kernel} >
                    <Row type="flex" justify="center">
                        
                            <Col span={1}></Col>
                        <Col span={6}>
                            <Link to='./newsa'>
                            <Card
                                style={{ width:360}} style={{ height:450}}
                                hoverable={true} className={NewsPageCss.content}
                                >
                                    <Meta       
                                        title="针心针意"
                                        description="编织一份爱，传递一份暖。山西晚报联合阿里巴巴天天正能量及全国22家媒体
                                        开展的2019“针心针意”大型暖冬公益行动正在进行。12月26日下午，活动首站走进太原市小店
                                        区营盘街道南内环街二社区，一百多平方米的活动室内人头攒动，来自辖区的六七十位志愿者
                                        加入到为贫困山区留守孩子编织温暖的爱心行动中，她们中年龄最大的70岁，最小的17岁，无论
                                        是编织高手，还是现学编织的年轻人，都是爱心爆棚。
                                        志愿者们领到毛线后，不禁感叹，“这线质量真不错”“中粗线，好织”“娃娃们围上一定漂亮又暖和”。
                                        各自找到座位，请教高手，很快现场就安静下来，一团团线在编织高手指尖翻飞灵动。
                                        一针一线都是爱的汇聚，山西晚报联合阿里巴巴天天正能量的“针心针意”活动除了线上编织活动外
                                        ，还有“H5公益互动小游戏”，根据H5页面显示，网友可以根据自己的喜好，为留守儿童“绘制”围巾，
                                        并写下祝福语，转发到朋友圈中。"
                                        />
                             </Card>
                             </Link>
                        </Col>
                            <Col span={1}></Col>
                        <Col span={6}>
                            <Link to='./newsb'>
                        <Card
                                style={{ width: 360 } } style={{ height: 450 } }
                                hoverable={true} className={NewsPageCss.content}
                                    >
                                        <Meta       
                                        title="申城别样“风景线”持续升温 实名注册志愿者人数已达433万"
                                        description="志愿服务是上海一张靓丽的城市名片。近年来，上海经济社会迅速发展，城市精神文明
                                        建设水平持续提高，志愿服务事业也随之不断升温。目前，与全国志愿服务信息系统对接的“上海志愿者
                                        网”上，已有实名注册志愿者433万人，占本市常住人口的17%以上，提前完成国家“十三五”规划目标。
                                        小区里，垃圾分类志愿者们起早贪黑，用勤劳与责任倡导着城市的“新时尚”；元旦、春节期间，家家户
                                        户团聚之时，40万平安志愿者为烟花爆竹管控忙碌；进博会上，面带微笑、热情服务的“小叶子”们，赢
                                        得了中外来宾的交口称赞……如今，走出家门，走上街头，上海志愿者的身影随处可见，志愿服务已成为
                                        许多市民认同的一种生活方式和发自内心的价值追求，成为加强公民道德建设、推进精神文明建设的重要载体。"
                                        />
                                 </Card>
                                 </Link>
                        </Col>  
                        <Col span={1}></Col>
                        <Col span={6}>
                        <Link to='./newsc'>
                            <Card
                                style={{ width: 360 }} style={{ height: 450 }}  hoverable={true} className={NewsPageCss.content}>                             
                                    <Meta       
                                        title="羡慕，这7位大学生志愿者要去联合国工作了"
                                        description="12月19日，中国青年志愿者海外服务计划——服务联合国机构项目首批志愿者出征仪式在上海外国语大学举行。
                                        团中央青年志愿者行动指导中心党委委员熊剑为志愿者代表授旗并讲话。联合国志愿人员组织亚太区域副主任玛农·贝尼耶通
                                        过视频为首批志愿者送行。联合国志愿人员组织中国办公室主任张楠、项目首批参与高校团委负责同志参加出征仪式。
                                        为更好地服务国家战略和党政外交大局，组织和引领当代中国青年跟着习近平总书记走出去，在海外志愿服务实践中学习宣传
                                        习近平新时代中国特色社会主义思想，增强“四个自信”、做到“两个维护”，中国青年志愿者协会与联合国志愿人员组织合作实
                                        施中国青年志愿者海外服务计划——服务联合国机构项目，选派中国青年志愿者赴联合国机构特别是驻“一带一路”沿线国家相关
                                        机构开展国际志愿服务。这一项目是学习贯彻落实习近平总书记“推动构建人类命运共同体”重要思想和推进“一带一路”建设的
                                        实践载体..."
                                    />
                            </Card>
                        </Link>
                        </Col>
                        <Col span={1}></Col>
                    </Row>
                    </div>

                    <div className={NewsPageCss.kernel} >
                    <Row type="flex" justify="center">
                        
                            <Col span={1}></Col>
                        <Col span={6}>
                            <Link to='./newsd'>
                            <Card
                                style={{ width:360}} style={{ height:380}}
                                hoverable={true} className={NewsPageCss.content}
                                cover={<img  src="/sms.gif"/>}
                                >
                                    <Meta       
                                        title="SMG志愿者 | 文明与文化同行 助力长江大保护"
                                        />
                                     
                             </Card>
                             </Link>
                             <a href='https://www.baidu.com/s?tn=news&rtt=1&bsst=1&wd=%E5%BF%97%E6%84%BF%E8%80%85%E6%96%B0%E9%97%BB&cl=2&origin=ps'> 了解更多时事新闻</a>
                        </Col>
                            <Col span={1}></Col>
                        <Col span={6}>
                            <Link to='./newse'>
                        <Card
                            style={{ width: 360 } } style={{ height: 380 } }
                            hoverable={true} className={NewsPageCss.content}
                            cover={<img  src="/d.png"/>}
                                    >
                                    <Meta       
                                        title="前进街“搭台唱戏”，62名志愿者获颁奖牌"
                                    />
                                 </Card>
                                 </Link>
                        </Col>  
                        <Col span={1}></Col>
                        <Col span={6}>
                        <Link to='./newsf'>
                            <Card
                                style={{ width: 360 }} style={{ height: 380 }}  hoverable={true}
                                className={NewsPageCss.content} cover={<img  src="/f.jpg"/>}>                             
                                    <Meta       
                                        title="媒体和志愿者携手 共担服务民生使命"
                                    />
                            </Card>
                        </Link>
                        </Col>
                        <Col span={1}> </Col>
                    </Row>
                    
                    </div>
                </div>
            </div>            
            <div className={NewsPageCss.below}>
                    <Row type="flex" justify="center">
                        <Col span={3}></Col>

                        <Col span={4}>
                        <h3>zhangmaolin</h3>
                        <h3>123456789</h3>
                        <img src="/erweima.jpg" width={'60'} height={'60'}></img>                   
                        </Col>

                        <Col span={4}>
                        <h3>zengzhuhong</h3>
                        <h3>123456789</h3>
                        <img src="/erweima.jpg" width={'60'} height={'60'}></img>
                        </Col>

                        <Col span={4}>                   
                        <h3>lilan</h3>
                        <h3>123456789</h3>        
                        <img src="/erweima.jpg" width={'60'} height={'60'}></img>           
                        </Col>

                        <Col span={4}>                    
                        <h3>wangfei</h3>
                        <h3>123456789</h3>        
                        <img src="/erweima.jpg" width={'60'} height={'60'}></img>           
                        </Col>

                        <Col span={1}></Col>
                        </Row>
               
               
                </div> 
        </div>
        )
    }
}