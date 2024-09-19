import { router, Tabs } from 'expo-router';
import React from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Button } from 'react-native';

export default function TabLayout() {
  const showLabel = false;

  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton tintColor="#000" />,
      }}>
      <Tabs.Screen
        name="transactions"
        options={{
          tabBarIcon: ({ color }) => <Feather name="list" size={24} color={color} />,
          tabBarLabel: 'Transactions',
          tabBarShowLabel: showLabel,
          headerTitle: 'Transactions',
          headerRight: () => (
            <Button onPress={() => router.push('/transactions/new')} title="Add New" />
          ),
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
          tabBarLabel: 'Accounts',
          tabBarShowLabel: showLabel,
          headerTitle: 'Accounts',
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
          tabBarLabel: 'Home',
          tabBarShowLabel: showLabel,
          headerTitle: 'Home',
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
          tabBarLabel: 'Budget',
          tabBarShowLabel: showLabel,
          headerTitle: 'Budget',
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
          tabBarLabel: 'Alerts',
          tabBarShowLabel: showLabel,
          headerTitle: 'Alerts',
        }}
      />
    </Tabs>
  );
}
