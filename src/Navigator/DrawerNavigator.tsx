import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigator from './BottomNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, View} from 'react-native';

const Drawer = createDrawerNavigator();

const HeaderRightIcons = () => {
  return (
    <View style={styles.header}>
      <MaterialCommunityIcons name="bell" size={30} style={styles.headerBell} />
      <HelpCircleIcon />
    </View>
  );
};

const HelpCircleIcon = () => {
  return (
    <MaterialCommunityIcons
      name="help-circle"
      size={30}
      style={styles.headerQue}
    />
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{
          title: '',
          headerRight: HeaderRightIcons,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginRight: 10,
  },
  headerBell: {
    marginRight: 10,
    color: 'black',
  },
  headerQue: {
    color: 'black',
  },
});

export default DrawerNavigator;
