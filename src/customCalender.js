import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import moment from 'moment-hijri'

export default class CustomCalender extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      choose: []
    }
  }

  color = (item, index) => {
    const current = Number(moment().format('DD'))
    console.log(item.getDate())
    const { choose } = this.state
    let color = ''
    if (choose && choose.length) {
      color = choose.includes(index) ? 'red' : 'white'
    } else {
      color = item.getDate() === current ? 'red' : 'white'
    }
    return color
  }

  handleChoose = (index) => {
    let choose = []
    if (choose && choose.length) {
      if (!choose.includes(index)) {
        choose.remove(0)
        choose.push(index)
      }
    } choose.push(index)
    this.setState({ choose })
  }

  render() {
    moment.locale('en')
    current = moment()._d
    var week = []
    var first = current.getDate() - current.getDay()
    current.setDate(first)
    for (var i = 0; i < 7; i++) {
      week.push(moment(+current)._d)
      current.setDate(current.getDate() + 1)
    }
    const dayOfWeeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return (
      <View style={{ flex: 1 }}>
        <View style={this.style.header}>
            <Text allowFontScaling={false} style={this.style.monthText} accessibilityTraits='header'>
              {this.props.month.toString(this.props.monthFormat)}
            </Text>
        </View>
        <View
          style={{
            marginTop: 7,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 13,
            marginHorizontal: 16
          }}
        >
          {dayOfWeeks.map((item, index) => {
            return (
              <Text
                key={index}
                style={{
                  width: 32,
                  textAlign: 'center',
                  fontSize: 15
                }}
              >
                {item}
              </Text>
            )
          })}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 16
          }}
        >
          {week.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  borderWidth: 2,
                  width: 48,
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 12,
                  borderColor: this.color(item, index)
                }}
                onPress={() => this.handleChoose(index)}
              >
                <Text style={{ fontSize: 18 }}>{item.getDate()}</Text>
                <Text>{moment(item).format('iD')}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    )
  }
}
