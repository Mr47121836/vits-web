import { Select } from 'antd';
import { connect } from 'dva';
import { Component } from 'react';

const { Option } = Select;


@connect(({ myModel }) => ({ myModel }))
export default class Home extends Component {
    handleChange =(value)=>{
        console.log(value)

        this.props.dispatch({
            type:"myModel/myfunction",
            payload:{
                speakerId:parseInt(value),
            }
        })
    }
    render() {
        const {speakerId} = this.props.myModel;
        console.log(speakerId)
        return (
            <Select
                showSearch
                style={{ width: "80%"}}
                onChange={this.handleChange}
                placeholder="请选择角色名称"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
            >
                <Option value="0">佩可</Option>
                <Option value="1">可可萝</Option>
                <Option value="2">凯露</Option>
                <Option value="3">怜</Option>
                <Option value="4">日和莉</Option>
                <Option value="5">忧衣</Option>
            </Select>
        )
    }
}
