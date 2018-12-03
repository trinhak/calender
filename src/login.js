import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';

export default class LoginFB extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <FBLogin
          buttonView={<FBLoginView />}
          ref={fbLogin => {
            this.fbLogin = fbLogin;
          }}
          loginBehavior={FBLoginManager.LoginBehaviors.Native}
          permissions={['email', 'user_friends']}
          onLogin={function(e) {
            console.log(e);
          }}
          onLoginFound={function(e) {
            console.log(e);
          }}
          onLoginNotFound={function(e) {
            console.log(e);
          }}
          onLogout={function(e) {
            console.log(e);
          }}
          onCancel={function(e) {
            console.log(e);
          }}
          onPermissionsMissing={function(e) {
            console.log(e);
          }}
        />
      </View>
    );
  }
}
