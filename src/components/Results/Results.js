import React, {Component} from 'react'
import {View, Dimensions, TouchableWithoutFeedback} from 'react-native'

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
    black: 'white',
    blue: '#FED131',
    brown: 'brown'
}

// create the barchart (http://bl.ocks.org/mbostock/3885304)
const data = [
    {frequency: 2, letter: 'Nov'},
    {frequency: 5},
    {frequency: 4},
    {frequency: 1, letter: 'Dec'},
    {frequency: 2},
    {frequency: 3},
    {frequency: 1},
    {frequency: 2, letter: '6'},
    {frequency: 3, letter: '7'},
    {frequency: 1, letter: '8'},
    {frequency: 2, letter: '9'},
    {frequency: 3, letter: '10'},
    {frequency: 1, letter: '11'},
    {frequency: 2, letter: '12'},
    {frequency: 3, letter: '13'},
]

class App extends Component {
    render() {
        return (
            <View>
                <BarChart />
            </View>
        )
    }
}

class Results extends Component {
    state = {
        barColour: data.map(()=>colours.blue)
    }

    toggleHighlight(i) {
        this.setState({
            barColour: [
                ...this.state.barColour.slice(0, i),
                this.state.barColour[i] === colours.blue ? colours.brown : colours.blue,
                ...this.state.barColour.slice(i+1)
            ]
        })
    }

    render() {
        const screen = Dimensions.get('window')
        const margin = {top: 50, right: 25, bottom: 200, left: 25}
        const width = screen.width - margin.left - margin.right
        const height = screen.height/1.5 - margin.top - margin.bottom
        const x = scaleBand()
            .rangeRound([0, width])
            .padding(0.6)
            .domain(data.map(d => d.letter))
        const maxFrequency = max(data, d => d.frequency)
        const y = scaleLinear()
            .rangeRound([height, 0])
            .domain([0, maxFrequency])

        const firstLetterX = x(data[0].letter)
        const secondLetterX = x(data[1].letter)
        const lastLetterX = x(data[data.length - 1].letter)
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
            <Svg width={screen.width} height={screen.height}>
                <G translate={margin.left + "," + margin.top}>
                    <G translate={"0," + height}>
                        <G key={-1}>
                            <Path stroke={colours.black} d={bottomAxisD} key="-1"/>
                            {
                                data.map((d, i) => (
                                    <G key={i + 1} translate={x(d.letter) + labelDx + ",0"}>
                                        <Text fill={colours.text} y={labelDistance}>{d.letter}</Text>
                                    </G>
                                ))
                            }
                        </G>
                        <G key={-2}>
                            <Path stroke={colours.black} d={leftAxisD} key="-1"/>
                            {
                                leftAxis.map((d, i) => (
                                    <G key={i + 1} translate={"0," + (y(d) - height)}>
                                        <Text fill={colours.text} x={-labelDistance} y={-notch}>{d}</Text>
                                    </G>
                                ))
                            }
                        </G>
                        {
                            data.map((d, i) => (
                                <TouchableWithoutFeedback key={i} onPress={()=>this.toggleHighlight(i)}>
                                    <Rect x={x(d.letter)}
                                          y={y(d.frequency) - height}
                                          width={x.bandwidth()}
                                          height={height - y(d.frequency)}
                                          fill={this.state.barColour[i]}>
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

export default Results