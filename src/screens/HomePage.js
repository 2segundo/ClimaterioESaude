import React, { Component } from 'react';
import { Button } from 'react-native';
import TextHome from '../texts/textHome';

class HomePage extends React.Component {
    static navigationOptions = {
      
      title: 'Home',
      
    };
    render() {
      return (
          <TextHome/>
      );
    }
}

export default HomePage;