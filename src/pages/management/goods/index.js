import React from "react";
import {Form, Input, DatePicker, Row, Col, Button, Divider, Table} from 'antd'
import axios from "axios";
const { RangePicker } = DatePicker

export default class Goods extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      goodsData: []
    }

    this.formRef = React.createRef()
  }

  componentDidMount() {

  }

  search = () => {
    const param = this.formRef.current.getFieldValue()
    axios.post('/api/goodManage/queryGoodsByPage', {...param}).then((res) => {

    })
  }

  reset = () => {
    this.formRef.current.resetFields()
  }

  render() {
    const { goodsData } = this.state

    const columns = [
      {
        title: '商品编号',
        dataIndex: 'goodId',
        key: 'goodId'
      },
      {
        title: '商品名称',
        dataIndex: 'goodName',
        key: 'goodName'
      },
      {
        title: '商品描述',
        dataIndex: 'description',
        key: 'description'
      },
      {
        title: '创建时间',
        dataIndex: 'crtTime',
        key: 'crtTime'
      },
      {
        title: '图片路径',
        dataIndex: 'imgUrl',
        key: 'imgUrl'
      },
      {
        title: '启用标识',
        dataIndex: 'valiFlag',
        key: 'valiFlag'
      }
    ]

    return (
      <div style={{ padding: '10px'}}>
        <Form ref={this.formRef} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Row>
            <Col span={8}>
              <Form.Item label="商品编号" name="goodId" span={8}>
                <Input></Input>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="商品名称" name="goodName" span={8}>
                <Input></Input>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="发布时间" name="crtTime" span={8}>
                <RangePicker />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button onClick={this.reset}>重置</Button>
              <Button type="primary" style={{ margin: '0 20px'}} onClick={this.search}>查询</Button>
            </Col>
          </Row>
        </Form>
        <Divider />
        <Table columns={columns} dataSource={goodsData}></Table>
      </div>
    )
  }
}