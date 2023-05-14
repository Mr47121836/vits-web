import { Component } from 'react'
import { connect } from 'dva';

@connect(({ myModel }) => ({ myModel }))
export default class MyAudio extends Component {

    render() {
        const { resDataFlag,audioUrl } = this.props.myModel
        
        if (resDataFlag=="1") {
            console.log("audioUrl",audioUrl)
            return (
                <audio controls="controls">
                    <source src={audioUrl} type="audio/mpeg" />
                    <embed height="100" width="100" src={audioUrl} />
                </audio>
            )
        }else{
            return(<div></div>)
        }

    }

}
