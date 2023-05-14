export default {
    namespace:'myModel',
  
    state: {
        name: 'myModel',
        speakerId:0,
        speakerText:"ごめんね、優衣",
        noiseScale:0.667,
        noiseScaleW:0.8,
        lengthScale:1,
        resDataFlag:"",
        bgmFlag:"muted",
        audioUrl:"",
    },
  
    effects:{},
    reducers:{
        myfunction(state, { payload }) {
          return {
            ...state,
            ...payload
          }
        },

    },
  
    subscriptions:{},
  }
  