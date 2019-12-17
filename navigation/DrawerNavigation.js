import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation' 
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  });

const AppContainer = createAppContainer(MyDrawerNavigator);

//export default createAppContainer(AppContainer);  
