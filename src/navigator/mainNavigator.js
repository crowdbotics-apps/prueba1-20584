import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps106108Navigator from '../features/Maps106108/navigator';
import Settings106086Navigator from '../features/Settings106086/navigator';
import Settings106071Navigator from '../features/Settings106071/navigator';
import NotificationList106070Navigator from '../features/NotificationList106070/navigator';
import Maps106069Navigator from '../features/Maps106069/navigator';
import UserProfile106018Navigator from '../features/UserProfile106018/navigator';
import Maps105999Navigator from '../features/Maps105999/navigator';
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
Maps106108: { screen: Maps106108Navigator },
Settings106086: { screen: Settings106086Navigator },
Settings106071: { screen: Settings106071Navigator },
NotificationList106070: { screen: NotificationList106070Navigator },
Maps106069: { screen: Maps106069Navigator },
UserProfile106018: { screen: UserProfile106018Navigator },
Maps105999: { screen: Maps105999Navigator },
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
