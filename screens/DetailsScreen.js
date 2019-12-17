import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';


export default class DetailsScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Details',
  };
  
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Details Page</Text>
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
    backgroundColor: '#e67e22',
  },
  text: {
    fontSize: 40,
    color: '#fff',
  }
});