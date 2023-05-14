import React, { Component, } from 'react'
import { Popover } from 'antd';
import './HomePage.less'
import DecimalStep from './DecimalStep.js'
import Search from './Search.js'
import MyButton from './myButton.js'
import InputText from './InputText.js'
import MyImg from './MyImg.js'
import MyAudio from './MyAudio'
import MyMusic from './MyMusic'
import MyVideo from './MyVideo'
import MyMessage from './MyMessage'


export default class HomePage extends Component {

    render() {
        return (
            <div className='content-page-all' >
                <div className='Icon-Music'>
                    <MyMusic />
                </div>
                <div className="video-box">
                    <MyVideo />
                </div>
                <div className='content-page-center'>
                    <div className='content-page-center-top'>
                        <div className='content-page-center-top-left'>
                            <Search />
                            <InputText />
                            <DecimalStep />
                            <MyButton />
                            <div className='content-page-center-output'>
                                <div className='content-page-center-output-audio'>
                                    <MyAudio />
                                </div>
                            </div>
                        </div>
                        <div className='content-page-center-top-right'>
                            <MyImg />
                        </div>
                    </div>
                    <div className='content-page-center-bottom'>
                        <ul className='contributors-list'>
                            <Popover content="代码贡献者">
                                <a href='https://github.com/Mr47121836' target="_blank" rel="noopener noreferrer" >
                                    <span class="contributors-list-image">
                                        <img src="https://avatars.githubusercontent.com/u/66686828?s=96&v=4" style={{ width: "48px", height: "48px", borderRadius: "50%" }} ></img>
                                    </span>
                                </a>
                            </Popover>
                            <Popover content="xcw模型贡献者">
                                <a href='https://space.bilibili.com/18361315?spm_id_from=333.337.0.0' target="_blank" rel="noopener noreferrer" >
                                    <span class="contributors-list-image">
                                        <img src="https://i1.hdslb.com/bfs/face/11a42fab885808cd3d3c6fd61a73767bc1d2e4f5.jpg@240w_240h_1c_1s.webp" referrer="no-referrer" style={{ width: "48px", height: "48px", borderRadius: "50%" }} ></img>
                                    </span>
                                </a>
                            </Popover>
                            
                        </ul>
                        <div className='success-message'>
                            <MyMessage/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}