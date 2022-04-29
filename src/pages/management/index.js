import React from "react";
import { Tabs } from 'antd'
import Good from "./goods";
import User from "./users"

export default class Management extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }
    }

    render() {
      const { TabPane } = Tabs
        return (
            <Tabs tabPosition='left'>
              <TabPane tab='商品管理' key='good'>
                <Good/>
              </TabPane>
              <TabPane tab='用户管理' key='user'>
                <User/>
              </TabPane>
              <TabPane tab='其他' key='other'>
                待开发
              </TabPane>
            </Tabs>
        )
    }
}