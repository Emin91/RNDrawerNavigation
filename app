import React, { Component } from 'react'
import DrawerNavigation from './navigation/DrawerNavigation'
 
export default class App extends Component{
  render(){
    return(
      <DrawerNavigation />
    );
  }
}

export default createAppContainer(HomeDrawer);