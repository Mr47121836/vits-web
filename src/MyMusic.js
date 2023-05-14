import { createFromIconfontCN } from '@ant-design/icons';
import React, { Component } from 'react';
import { connect } from 'dva';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4009661_7fohnw02e9t.js',
});


@connect(({ myModel }) => ({ myModel }))
export default class MyMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinFlag: ""
        }
    }
    myClik = () => {
        console.log("clk")
        const { bgmFlag } = this.props.myModel

        if(bgmFlag=="muted"){ //关
            this.props.dispatch({
                type: "myModel/myfunction",
                payload: {
                    bgmFlag: "",
                }
            })
        }else{
            this.props.dispatch({
                type: "myModel/myfunction",
                payload: {
                    bgmFlag: "muted",
                }
            })
        }
        
        if (this.state.spinFlag) {
            this.setState({
                spinFlag: ""
            })
        } else {
            this.setState({
                spinFlag: "spin"
            })
        }

    }
    render() {

        return (
            <IconFont type="icon-yinlemusic214" spin={this.state.spinFlag} style={{ fontSize: "40px", }} onClick={this.myClik} />
        )
    }

}