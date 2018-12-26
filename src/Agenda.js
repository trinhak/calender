import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { Agenda } from '../component/src'
// import { Agenda } from 'react-native-calendars';

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    console.log('select: ', this.state.selected)
    return (
        <Agenda
          // items={{
          //   '2019-12-15': [{ text: 'item 2 - any js object' }],
          //   [this.state.selected]: [{ text: 'item 1 - any js object' }],

          // }}
          renderItem={this.renderItem.bind(this)}
          //loadItemsForMonth={this.loadItems.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          renderDay={this.renderItem.bind(this)}
          hideKnob={true}
          dayComponent={props => {
            return (
              <TouchableOpacity
                onPress={() =>
                  this.setState({ selected: props.date.dateString })
                }
                style={{
                  borderRadius: 12,
                  marginTop: 2,
                  width: 48,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderWidth: 2,
                  borderColor: props.state === 'today' ? 'yellow' : 'null',
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color:
                      props.state ===  new Date(props.date.dateString).getDay() === 5
                        ? 'red'
                        : props.state === 'disabled'
                        ? 'gray'
                        : 'white',
                    fontSize: 18
                  }}
                >
                  {props.date.day}
                </Text>
                <Text style={{ fontSize: 11, color: 'white' }}>hehe</Text>
              </TouchableOpacity>
            )
          }}

          theme={{
            calendarBackground: '#030220',
            'stylesheet.calendar.main': {
              week: {
                marginTop: -11,
                marginBottom: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 60
              }
            }
          }}
        />
        // {/* <View style={{ backgroundColor: 'red', height: '100%', flex: 1 }}>
        //   <Text>hehe</Text>
        // </View> */}
    )
  }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height }]}>
        <Text>{item.text}</Text>
      </View>
    )
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    )
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name
  }

  timeToString(time) {
    const date = new Date(time)
    return date.toISOString().split('T')[0]
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
})
