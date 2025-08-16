import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../constants/colors';

// Import screens
import {
  AnasayfaScreen,
  HaritaScreen,
  SelfieScreen,
  KurumlarScreen,
  ProfilScreen,
} from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.lightGray,
          height: 90,
          paddingBottom: 20,
          paddingTop: 10,
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Anasayfa"
        component={AnasayfaScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Harita"
        component={HaritaScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Selfie"
        component={SelfieScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="camera-alt" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Kurumlar"
        component={KurumlarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="business" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
