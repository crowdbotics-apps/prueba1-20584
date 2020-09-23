import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings105977Navigator from '../features/Settings105977/navigator';
import Settings105962Navigator from '../features/Settings105962/navigator';
import NotificationList105961Navigator from '../features/NotificationList105961/navigator';
import Maps105960Navigator from '../features/Maps105960/navigator';
import UserProfile105959Navigator from '../features/UserProfile105959/navigator';
import Maps105940Navigator from '../features/Maps105940/navigator';
import Settings105918Navigator from '../features/Settings105918/navigator';
import Settings105903Navigator from '../features/Settings105903/navigator';
import NotificationList105902Navigator from '../features/NotificationList105902/navigator';
import Maps105901Navigator from '../features/Maps105901/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings105977: { screen: Settings105977Navigator },
Settings105962: { screen: Settings105962Navigator },
NotificationList105961: { screen: NotificationList105961Navigator },
Maps105960: { screen: Maps105960Navigator },
UserProfile105959: { screen: UserProfile105959Navigator },
Maps105940: { screen: Maps105940Navigator },
Settings105918: { screen: Settings105918Navigator },
Settings105903: { screen: Settings105903Navigator },
NotificationList105902: { screen: NotificationList105902Navigator },
Maps105901: { screen: Maps105901Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
