import React, { Component } from 'react'
import { View, Dimensions, TouchableWithoutFeedback } from 'react-native'

import Svg, {
  G,
  Line,
  Path,
  Rect,
  Text
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
    this.state = {
        barColour: this.props.data.map(() => colours.bar)
    }
  }
  toggleHighlight(i) {
    this.setState({
      barColour: [
        ...this.state.barColour.slice(0, i),
        this.state.barColour[i] === colours.bar ? colours.selected : colours.bar,
        ...this.state.barColour.slice(i + 1)
      ]
    })
  }

  render() {
    const screen = Dimensions.get('window')
    const margin = { top: 10, right: 20, bottom: 40, left: 30 }
    const width = screen.width - margin.left - margin.right
    const height = this.props.config.height - margin.top - margin.bottom
    const x = scaleBand()
      .rangeRound([0, width])
      .padding(0.6)
      .domain(this.props.data.map(d => d.letter))
    const maxFrequency = max(this.props.data, d => d.frequency)
    const y = scaleLinear()
      .rangeRound([height, 0])
      .domain([0, maxFrequency])

    const firstLetterX = x(this.props.data[0].letter)
    const secondLetterX = x(this.props.data[1].letter)
    const lastLetterX = x(this.props.data[this.props.data.length - 1].letter)
    const labelDx = (secondLetterX - firstLetterX) / 2

    const bottomAxis = [firstLetterX - labelDx, lastLetterX + labelDx]
    const bottomAxisD = line()
      .x(d => d + labelDx)
      .y(() => 0)
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
              <Path stroke={colours.lineColor} d={bottomAxisD} key="-1" />
              {
                this.props.data.map((d, i) => (
                  <G key={i + 1} translate={x(d.letter) + labelDx + ",0"}>
                    <Text fill={colours.text} y={labelDistance}>{d.letter}</Text>
                  </G>
                ))
              }
            </G>
            <G key={-2}>
              {
                leftAxis.map((d, i) => (
                  <G key={i + 1} translate={"0," + (y(d) - height)}>
                    <Text fill={colours.text} x={-labelDistance} y={-notch}>{d}</Text>
                  </G>
                ))
              }
            </G>
            {
              this.props.data.map((d, i) => (
                <TouchableWithoutFeedback key={i} onPress={() => this.toggleHighlight(i)}>
                  <Rect x={x(d.letter)}
                    y={y(d.frequency) - height}
                    width={x.bandwidth()}
                    height={height - y(d.frequency)}
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
}
