import React from "react";
import {Card, Carousel, Col, Image, Row} from 'antd';
import './index.css'
import Meta from "antd/es/card/Meta";
import axios from "axios";

export default class Index extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      imgList: [
        {
          url: 'https://img-blog.csdnimg.cn/20200408151410261.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlbmppdXN1aTgwODM=,size_16,color_FFFFFF,t_70',
          key: '1'
        },
        {
          url: 'https://img-blog.csdnimg.cn/20200408151410261.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlbmppdXN1aTgwODM=,size_16,color_FFFFFF,t_70',
          key: '1'
        },
        {
          url: 'https://img-blog.csdnimg.cn/20200408151410261.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlbmppdXN1aTgwODM=,size_16,color_FFFFFF,t_70',
          key: '1'
        }
      ],
      goods: [
        {
          goodId: '111',
          goodName: 'name',
          imgUrl: '111',
          price: 10,
          description: '111'
        },
        {
          goodId: '111',
          goodName: 'name',
          imgUrl: '111',
          price: 10,
          description: '111'
        },
        {
          goodId: '111',
          goodName: 'name',
          imgUrl: '111',
          price: 10,
          description: '111'
        },
        {
          goodId: '111',
          goodName: 'name',
          imgUrl: '111',
          price: 10,
          description: '111'
        },
        {
          goodId: '111',
          goodName: 'name',
          imgUrl: '111',
          price: 10,
          description: '111'
        }
      ]
    }
  }

  componentDidMount() {
    // axios.get('mock/user/login.json').then((res) => {
    //   console.log('111', res)
    // })
    axios.get('api/queryMall').then((res) => {
      console.log('1111', res)
    })

    // setInterval(() => {
    //   axios.get('lzh/sb').then((res) => {
    //     console.log('1111', res)
    //   })
    // }, 50)
  }

  render() {
    const { imgList, goods } = this.state
    return (
        <div className="main-container">
          <Carousel autoplay>
            {
              imgList && imgList.map(item => {
                return (
                    <div key={item.key}>
                      <Image src={item.url} alt="" />
                    </div>
                )
              })
            }
          </Carousel>
          <Row gutter={10}>
            {
              goods && goods.length > 0 ? goods.map(item => {
                return (
                    <Col key={item.goodId} span={6}>
                      <Card cover={<img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt='商品图片'/>}>
                        <Meta title={`${item.goodName}/$${item.price}`} description={item.description}/>
                      </Card>
                    </Col>
                )
              }) : <div>暂无数据</div>
            }
          </Row>
        </div>
    )
  }
}