import React, { Component } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import InfoScreen from './screens/InfoScreen';
 
class App extends Component{
  render(){
    return <AppContainer />
  }
}

export default App;

const TabsNavigation = createBottomTabNavigator(
  {
  Home: {screen: HomeScreen},
  Details: {screen: DetailsScreen},
  Info: {screen: InfoScreen},
},
{
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes
    [navigation.state.index];
    return {
      headerTitle: routeName
    };
  }
},
);

const TabsStack = createStackNavigator({
  TabsNavigation: TabsNavigation,
});

const DrawerNavigation = createDrawerNavigator({
  Home: {screen: TabsStack},
});

const SwitchNavigation = createSwitchNavigator({
  Home: {screen: DrawerNavigation},
});

const AppContainer = createAppContainer(SwitchNavigation);