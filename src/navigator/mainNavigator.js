import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Tutorial215583Navigator from '../features/Tutorial215583/navigator';
import NotificationList215555Navigator from '../features/NotificationList215555/navigator';
import Settings215554Navigator from '../features/Settings215554/navigator';
import Settings215546Navigator from '../features/Settings215546/navigator';
import UserProfile215544Navigator from '../features/UserProfile215544/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Tutorial215583: { screen: Tutorial215583Navigator },
NotificationList215555: { screen: NotificationList215555Navigator },
Settings215554: { screen: Settings215554Navigator },
Settings215546: { screen: Settings215546Navigator },
UserProfile215544: { screen: UserProfile215544Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
