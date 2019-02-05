/**
 * IconLabel.js
 * 
 * 
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

class IconLabel extends Component {
  render() {
    const { container } = styles;
    const { title, ...props } = this.props;
    return (
      <View style={container}>
        <IconButton size={24} {...props}/>
        <Text>{title}</Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export { IconLabel };
