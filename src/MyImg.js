import { connect } from 'dva';
import React ,{Component} from 'react'

@connect(({ myModel }) => ({ myModel }))
export default class MyImg extends Component{
     render(){
        const {speakerId} = this.props.myModel
        if(speakerId === 0){
            return(
                <div className='act' style={{backgroundImage:`url('https://patchwiki.biligame.com/images/pcr/6/69/f7dnmu3fesrrxjtxkzx5nhxbpssm0mv.png')`,
                    width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat: 'no-repeat',backgroundPosition:"center"}}>
                </div>
            )
        }else if(speakerId === 1){
            return(
                <div className='act' style={{backgroundImage:`url('https://patchwiki.biligame.com/images/pcr/7/73/ow3oehdi9uqx4p6p403peq6hnqk77ft.png')`,
                    width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat: 'no-repeat',backgroundPosition:"center"}}>
                </div>
            )
        }else if(speakerId === 2){
            return(
                <div className='act' style={{backgroundImage:`url('https://patchwiki.biligame.com/images/pcr/d/d2/ptaznolpfzgzrqzqf9q1kq7m6uuugz2.png')`,
                    width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat: 'no-repeat',backgroundPosition:"center"}}>
                </div>
            )
        }else if(speakerId === 3){
            return(
                <div className='act' style={{backgroundImage:`url('https://patchwiki.biligame.com/images/pcr/6/67/b5yuxv7gp105toxtkvqvq780fsn8swh.png')`,
                    width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat: 'no-repeat',backgroundPosition:"center"}}>
                </div>
            )
        }else if(speakerId === 4){
            return(
                <div className='act' style={{backgroundImage:`url('https://patchwiki.biligame.com/images/pcr/6/62/dx8nwh6wrc4zm6vrrmofob3t3li5k2y.png')`,
                    width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat: 'no-repeat',backgroundPosition:"center"}}>
                </div>
            )
        }else if(speakerId === 5){
            return(
                <div className='act' style={{backgroundImage:`url('https://patchwiki.biligame.com/images/pcr/2/24/eww10hyx5o81yz5ewy6w8dhltalsrn8.png')`,
                    width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat: 'no-repeat',backgroundPosition:"center"}}>
                </div>
            )
        }else if(speakerId === 6){
            return(
                <div className='act' style={{backgroundImage:`url('https://patchwiki.biligame.com/images/pcr/c/c1/juy9om1vygp5frakjayq74eaaj9nab3.png')`,
                    width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat: 'no-repeat',backgroundPosition:"center"}}>
                </div>
            ) 
        }
    }
}