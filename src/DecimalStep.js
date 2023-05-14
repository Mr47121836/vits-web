import React, { Component } from 'react';
import { connect } from 'dva';
import { Slider, InputNumber, Row, Col } from 'antd';



@connect(({ myModel }) => ({ myModel }))
export default class DecimalStep extends React.Component {
  state = {
    inputValue: 0,
  };

  onChange1 = value => {
    if (isNaN(value)) {
      return;
    }

    this.props.dispatch({
      type: "myModel/myfunction",
      payload: {
        noiseScale: value,
      }
    })
  };
  onChange2 = value => {
    if (isNaN(value)) {
      return;
    }

    this.props.dispatch({
      type: "myModel/myfunction",
      payload: {
        noiseScaleW: value,
      }
    })
  };
  onChange3 = value => {
    if (isNaN(value)) {
      return;
    }

    this.props.dispatch({
      type: "myModel/myfunction",
      payload: {
        lengthScale: value,
      }
    })
  };


  render() {
    const { noiseScale, noiseScaleW, lengthScale } = this.props.myModel;
    return (
      <div style={{ marginTop: "5%" }}>
        <div style={{ marginTop: "5%" }}>
            <Row>
            <Col span={12}>
            <h4>控制感情变化程度</h4>
              <Slider
                min={0}
                max={1}
                onChange={this.onChange1}
                value={typeof noiseScale === 'number' ? noiseScale : 0}
                step={0.01}
                style={{width:"100%"}}
            
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={1}
                style={{ margin: '0 16px' }}
                step={0.01}
                value={noiseScale}
                onChange={this.onChange1}
              />
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: "5%" }}>
          <Row>
            <Col span={12}>
            <h4>控制音素发音长度</h4>
              <Slider
                min={0}
                max={1}
                onChange={this.onChange2}
                value={typeof noiseScaleW === 'number' ? noiseScaleW : 0}
                step={0.01}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={1}
                style={{ margin: '0 16px' }}
                step={0.01}
                value={noiseScaleW}
                onChange={this.onChange2}
              />
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: "5%" }}>
          <Row>
            <Col span={12}>
            <h4>控制整体语速</h4>
              <Slider
                min={0}
                max={1}
                onChange={this.onChange3}
                value={typeof lengthScale === 'number' ? lengthScale : 0}
                step={0.01}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={1}
                style={{ margin: '0 16px' }}
                step={0.01}
                value={lengthScale}
                onChange={this.onChange3}
              />
            </Col>
          </Row>
        </div>
      </div>

    );
  }
}


