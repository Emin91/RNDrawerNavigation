import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';


export default class HomeScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Info',
  };

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Some Page</Text>
        <Button
        onPress={() => this.props.navigation.navigate('Home')}
        title="Go to Home"
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
    backgroundColor: '#785463',
  },
  text: {
    fontSize: 40,
    color: '#fff',
  }
});