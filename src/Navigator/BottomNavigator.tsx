import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import PaymentScreen from '../Screens/PaymentScreen/PaymentScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import ExpenseScreen from '../Screens/ExpenseScreen/ExpenseScreen';

const MaterialBottomTab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  const renderIcons = (name: any, color: any, type: any) => {
    if (type === 'MaterialCommunityIcons') {
      return <MaterialCommunityIcons name={name} color={color} size={26} />;
    } else {
      return <AntDesign name={name} color={color} size={26} />;
    }
  };

  return (
    <MaterialBottomTab.Navigator activeColor="#EA1179" inactiveColor="#000">
      <MaterialBottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) =>
            renderIcons('home', color, 'MaterialCommunityIcons'),
        }}
      />
      <MaterialBottomTab.Screen
        name="Payments"
        component={PaymentScreen}
        options={{
          tabBarIcon: ({color}) => renderIcons('swap', color, ''),
        }}
      />
      <MaterialBottomTab.Screen
        name="Expenses"
        component={ExpenseScreen}
        options={{
          tabBarIcon: ({color}) =>
            renderIcons('bitcoin', color, 'MaterialCommunityIcons'),
        }}
      />
      <MaterialBottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) =>
            renderIcons('face-man', color, 'MaterialCommunityIcons'),
        }}
      />
    </MaterialBottomTab.Navigator>
  );
};

export default BottomNavigator;
