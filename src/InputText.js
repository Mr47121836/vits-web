import { Input } from 'antd';
import React, { Component } from 'react'
import { connect } from 'dva';

const { TextArea } = Input;

@connect(({ myModel }) => ({ myModel }))
export default class InputText extends Component {
    handleChange = e => {
        console.log('Change:', e.target.value);
        this.props.dispatch({
            type:"myModel/myfunction",
            payload:{
                speakerText:e.target.value,
            }
        })
    };
    
    render() {
        const {speakerText} = this.props.myModel;
        return (
            <div style={{marginTop:"5%",width:"80%"}}>
                <TextArea title='555' style={{height:"100%"}}  autoSize={{ minRows: 3, maxRows: 5 }} placeholder={speakerText} showCount maxLength={50} onChange={this.handleChange} />
            </div>
        )
    }
}

