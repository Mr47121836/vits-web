import { Component } from 'react'
import { connect } from 'dva';


@connect(({ myModel }) => ({ myModel }))
export default class MyVideo extends Component {
   
    render() {
        const {bgmFlag} = this.props.myModel;
        console.log("bgm",bgmFlag)
        return (
            <video class="video-background" preload="auto" autoplay="auto" loop="loop" 
            src="https://f.video.weibocdn.com/u0/dja6xw9jgx081rBUFMkM0104120e94UC0E050.mp4?label=mp4_2160p60&template=3840x2160.20.0&media_id=4845146429390959&tp=8x8A3El:YTkl0eM8&us=0&ori=1&bf=4&ot=h&lp=00003L33HH&ps=mZ6WB&uid=hIJVlyA&ab=,8143-g0,8013-g0&Expires=1684069367&ssig=sKvckWiW19&KID=unistore,video" tabindex="-1" type="video/mp4" muted={bgmFlag}></video>
        )

    }
}