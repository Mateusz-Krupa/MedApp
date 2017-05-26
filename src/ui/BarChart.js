import React, { Component, PropTypes } from 'react'
import { View, Dimensions, TouchableWithoutFeedback } from 'react-native'

import Svg, {
  G,
  Line,
  Path,
  Rect,
  Text,
  ActivityIndicator
} from 'react-native-svg'

// d3 lib
import {
  scaleBand,
  scaleLinear
} from 'd3-scale'

import {
  max,
  ticks
} from 'd3-array'

import {
  line
} from 'd3-shape'

import {
  path
} from 'd3-path'

const colours = {
  text: 'black',
  lineColor: '#E1E1E6',
  bar: '#FED131',
  selected: 'red'
}

// create the barchart (http://bl.ocks.org/mbostock/3885304)

export default class BarChart extends Component {

  constructor(props) {
    super(props);
  }

  init(){
    this.state = {
      barColour: this.props.data.map(() => this.props.bar)
    }
  }

  toggleHighlight(i) {
    this.setState({
      barColour: [
        ...this.state.barColour.slice(0, i),
        this.state.barColour[i] === this.props.bar ? this.props.selected : this.props.bar,
        ...this.state.barColour.slice(i + 1)
      ]
    })
  }

  createGraph() {
    const screen = Dimensions.get('window')
    const margin = { top: 10, right: 20, bottom: 40, left: 30 }
    const width = screen.width - margin.left - margin.right
    const height = this.props.config.height - margin.top - margin.bottom
    const x = scaleBand()
      .rangeRound([0, width])
      .padding(0.6)
      .domain(this.props.data.map(d => d.label))
    const maxFrequency = max(this.props.data, d => d.value)
    const y = scaleLinear()
      .rangeRound([height, 0])
      .domain([0, maxFrequency])

    const firstLabelX = x(this.props.data[0].label)
    const secondLabelX = x(this.props.data[1].label)
    const lastLabelX = x(this.props.data[this.props.data.length - 1].label)
    const labelDx = (secondLabelX - firstLabelX) - 20

    const bottomAxis = [firstLabelX - labelDx, lastLabelX + labelDx]
    const bottomAxisD = line()
      .x(d => d + labelDx)
      .y(() => 0)
      (bottomAxis)

    const middleAxisD = line()
      .x(d => d + labelDx)
      .y(() => 50)
      (bottomAxis)

    const leftAxis = ticks(0, maxFrequency, 5)
    const leftAxisD = line()
      .x(() => bottomAxis[0] + labelDx)
      .y(d => y(d) - height)
      (leftAxis)

    const notch = 5
    const labelDistance = 9

    const svg = (
      <Svg width={screen.width} height={this.props.config.height}>
        <G translate={margin.left + "," + margin.top}>
          <G translate={"0," + height}>
            <G key={-1}>
              <Path stroke={this.props.lineColor} d={bottomAxisD} key="-1" />
              {
                this.props.data.map((d, i) => (
                  <G key={i + 1} translate={x(d.label) + labelDx + ",0"}>
                    {/*<Text fill={this.props.text} y={labelDistance}>{d.label}</Text>*/}
                  </G>
                ))
              }
            </G>
            <G key={1}>
              <Path stroke={this.props.lineColor} d={middleAxisD} key="1" />
            </G>
            <G key={-2}>
              {
                leftAxis.map((d, i) => (
                  <G key={i + 1} translate={"0," + (y(d) - height)}>
                    <Text fill={this.props.text} x={-labelDistance} y={-notch}>{d}</Text>
                  </G>
                ))
              }
            </G>
            {
              this.props.data.map((d, i) => (
                <TouchableWithoutFeedback key={i} onPress={() => this.toggleHighlight(i)}>
                  <Rect x={x(d.label)}
                    y={y(d.value) - height}
                    width={x.bandwidth()}
                    height={height - y(d.value)}
                    fill={this.state.barColour[i]}
                    rx={3} ry={3}
                  >
                  </Rect>
                </TouchableWithoutFeedback>
              ))
            }
          </G>
        </G>
      </Svg>
    )

    return svg;
  }

  render() {
    if (this.props.data.length > 2) {
      this.init();
      return this.createGraph();
    }
    return (<View> 
      <Text> Loading... </Text>
    </View>);
  }

}


BarChart.propTypes = {
  text: PropTypes.string,
  lineColor: PropTypes.string,
  bar: PropTypes.string,
  selected: PropTypes.string,
  height: PropTypes.number
}

BarChart.defaultProps = {
  text: 'black',
  lineColor: '#E1E1E6',
  bar: '#FED131',
  selected: 'red'
}