import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Feed from '../pages/Feed';
import Maps from '../pages/Maps';
import Talk from '../pages/Talk';
import Institutions from '../pages/Institutions';

import DrawerContent from '../utils/DrawerContent';
import Appbar from '../utils/Appbar';

import colors from '../styles/colors';
import styles from '../styles/barStyle';

const DrawerNavigator = createDrawerNavigator();
const TabNavigator = createMaterialBottomTabNavigator();

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Appbar />

      <TabNavigator.Navigator
        initialRouteName="Feed"
        backBehavior="initialRoute"
        shifting={true}
        activeColor={colors.gray2}
        barStyle={styles.container}
        sceneAnimationEnabled={false}>
        <TabNavigator.Screen
          name="Feed"
          component={Feed}
          options={{
            title: 'Notícias',
            tabBarIcon: 'rss',
          }}
        />
        <TabNavigator.Screen
          name="talk"
          component={Talk}
          options={{
            title: 'Conversas',
            tabBarIcon: 'chat',
          }}
        />
        <TabNavigator.Screen
          name="Map"
          component={Maps}
          options={{
            title: 'Mapa',
            tabBarIcon: 'map',
          }}
        />
        <TabNavigator.Screen
          name="Institutions"
          component={Institutions}
          options={{
            title: 'Instituições',
            tabBarIcon: 'home',
          }}
        />
      </TabNavigator.Navigator>
    </React.Fragment>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <DrawerNavigator.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}>
      <DrawerNavigator.Screen name="Home" component={Home} />
    </DrawerNavigator.Navigator>
  );
};

export default AppRoutes;
