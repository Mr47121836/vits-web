import { Button } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import { myfuntion } from './services/services';
import { message } from 'antd';

@connect(({ myModel }) => ({ myModel }))
export default class myButton extends Component {
    myClick = () => {
        const { speakerId, speakerText, noiseScale, noiseScaleW, lengthScale } = this.props.myModel;
        let dataInfo = { speakerId: speakerId,noiseScale: noiseScale, noiseScaleW: noiseScaleW, lengthScale: lengthScale, speakerText: speakerText }
        console.log("dataInfo:", dataInfo);
        myfuntion(dataInfo).then((res) => {
            this.props.dispatch({
                type:"myModel/myfunction",
                payload:{
                    resDataFlag:"",
                }
            })
            
            if(res.data){
                message.success('This page to generate wav is success. ╮(╯▽╰)╭ ', 2);
                console.log("res", res)
                this.props.dispatch({
                    type:"myModel/myfunction",
                    payload:{

                        resDataFlag:"1",
                        audioUrl:res.data,

                    }
                })
            }else{
                console.log("返回数据为空")
                message.error('This page to generate wav is fault.',2);
            }
        })
    }

    render() {
        return (
            <div style={{ marginTop: "8%" }}>
                <Button type="primary" onClick={this.myClick} block>
                    生成
                </Button>
            </div>
        )
    }
}