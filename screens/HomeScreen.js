import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';


export default class HomeScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Home Page</Text>
        <Button
        onPress={() => this.props.navigation.navigate('Details')}
        title="Go to Details"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c0392b',
  },
  text: {
    fontSize: 40,
    color: '#fff',
  }
});