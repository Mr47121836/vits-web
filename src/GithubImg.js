import { GithubOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import { connect } from 'dva';

@connect(({ myModel }) => ({ myModel }))
export default class GithubImg extends Component {

    render() {
        return (
            <a href='https://github.com/Mr47121836' target="_blank" rel="noopener noreferrer" >
                <GithubOutlined style={{ fontSize: "40px", display: 'flex',color:'black', justifyContent: 'center'}} />
            </a>
        )
    }

}