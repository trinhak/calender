import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

import SplashScreen from 'react-native-splash-screen'

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      //SplashScreen.hide();
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('../assets/test.jpg')}
      >
        <Text style={styles.text}>
          Calendar with period marking and spinner
        </Text>
        <Calendar
          ref = 'calendar'
          onDayPress={day => this.onDayPress(day)}
          dayComponent={(props) => {
            return (
              <TouchableOpacity
                onPress={() => props.onPress(props.date)}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: props.state === "today" ? 'blue' : props.state === "disabled" ? 'gray' : 'black',
                    backgroundColor: props.state === "today" ? 'lightblue' : props.date.dateString === this.state.selected ? 'red' :'white',
                    width: 25,
                    height: 25,
                    borderRadius: 12,
                    marginBottom: 5
                  }}
                >
                  {props.date.day}
                </Text>
              </TouchableOpacity>
            );
          }
        }
          style={styles.calendar}
          markingType={'custom'}
          onPressArrowLeft={() => this.refs['calendar'].addMonth(1)}
          onPressArrowRight={() => this.refs['calendar'].addMonth(-1)}
          theme={{
             //backgroundColor: 'red',
            calendarBackground: 'rgba(255,255,255,0.1)',
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
                marginTop: 5,
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }
            },
            'stylesheet.calendar.header': {
              week: {
                marginTop: 5,
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
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
          hideArrows={false}
        />
      </ImageBackground>
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
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 0,
  }
});
