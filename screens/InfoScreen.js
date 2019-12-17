import React, { Component } from 'react'
import { StyleSheet, View, Text, } from 'react-native';


export default class HomeScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Info',
  };

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Info Page</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#785463',
  },
  text: {
    fontSize: 40,
    color: '#fff',
  }
});