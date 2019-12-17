import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import InfoScreen from './screens/InfoScreen'
 
const MyDrawerNavigator = createDrawerNavigator(
  {
  Home: HomeScreen,
  Details: DetailsScreen, 
  Info: InfoScreen,
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#ee5253',
      labelStyle: {
        fontSize: 15,
      }
    }
  },
)

export default createAppContainer(MyDrawerNavigator);
