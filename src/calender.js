import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

import Icon from 'react-native-vector-icons/Feather';

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderLeft = () => {
    return (
      <TouchableOpacity>
        <Icon name="arrow-left" size={30} />
      </TouchableOpacity>
    )
  }
  renderRight = () => {
    return (
      <TouchableOpacity>
        <Icon name="arrow-right" size={30} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
      >
        <Text style={styles.text}>
          Calendar with period marking and spinner
        </Text>
        <Calendar
          ref = 'calendar'
          onDayPress={day => this.onDayPress(day)}
          dayComponent={(props) => {
            console.log(props)
            return (
              <TouchableOpacity
                onPress={() => props.onPress(props.date)}
                style={{
                  borderRadius: 7,
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 5,
                  borderWidth: 1,
                  borderColor: props.state === "today" ? 'lightblue' : props.date.dateString === this.state.selected ? 'yellow' : '#2c3e50',
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: props.state === "today" ? 'blue' : props.state === "disabled" ? 'gray' : 'white',
                    fontSize: 20
                  }}
                >
                  {props.date.day}
                </Text>
                <Text>oke</Text>
              </TouchableOpacity>
            );
          }
        }
          style={styles.calendar}
          markingType={'custom'}
          onPressArrowLeft={() => this.refs['calendar'].addMonth(1)}
          onPressArrowRight={() => this.refs['calendar'].addMonth(-1)}
          renderArrow={(direction) => direction === 'left' ? <Image source={require('../assets/black.png')} style={{ width: 25, height: 25, tintColor: 'red' }} /> : <Text>right</Text>}
          hideArrows={false}
          theme={{
             //backgroundColor: 'red',
            calendarBackground: '#2c3e50',
            monthTextColor: 'lightgreen',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textMonthFontWeight: 'bold',
            textMonthFontSize: 20,
            textDayHeaderFontSize: 16,
            textSectionTitleColor: 'lightgreen',
            'stylesheet.calendar.main': {
              week: {
                margin: 5,
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
              }
            },
            'stylesheet.calendar.header': {
              week: {
                marginTop: 5,
                flexDirection: 'row-reverse',
                justifyContent: 'space-around',
              },
              
            },

          }}
          markedDates={{
            [this.state.selected]: {
              customStyles: {
                container: {
                  backgroundColor: 'green'
                },
                text: {
                  color: 'black',
                  fontWeight: 'bold'
                }
              }
            }
          }}
        />
      </ScrollView>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderColor: '#eee',
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: '#2c3e50'
  }
});
