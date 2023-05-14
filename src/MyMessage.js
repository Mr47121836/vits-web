import { connect } from 'dva';
import React, { Component } from 'react'
import { notification } from 'antd';
import { message } from 'antd';
import { getCountSuccess } from './services/services';

@connect(({ myModel }) => ({ myModel }))
export default class MyMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {

        const args = {

            message: 'Trips',
            description:
                '请在输入框输入日语生成音频，目前网站没有中文模型。。。',
            duration: 0,

        };

        notification.open(args);

        getCountSuccess().then((res) => {
            if(res){
                console.log("data", res.data.data)
                this.setState({
                    count: res.data.data
                })
            }else{
                message.error('This page get count is error',2);  
            }
        })

    }
    render() {

        return (
            <span style={{ fontSize: "20px", color: "#ED3C0A" }}>本站已经累计生成{this.state.count}条语音</span>
        )
    }
}