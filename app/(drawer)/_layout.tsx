import React from 'react';
import { StyleSheet } from 'react-native';
import { router, usePathname } from 'expo-router';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Drawer from 'expo-router/drawer';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import UserInfo from '@/components/UserInfo';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const pathname = usePathname();

  return (
    <DrawerContentScrollView {...props}>
      <UserInfo />
      <DrawerItem
        icon={({ color, size }) => (
          <Feather name="list" size={size} color={pathname === '/' ? '#fff' : '#000'} />
        )}
        label={'Home'}
        labelStyle={[styles.navItemLabel, { color: pathname === '/' ? '#fff' : '#000' }]}
        style={{
          backgroundColor: pathname === '/' ? '#333' : '#fff',
        }}
        onPress={() => {
          router.push('/(drawer)/(tabs)');
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign name="user" size={size} color={pathname === '/profile' ? '#fff' : '#000'} />
        )}
        label={'Profile'}
        labelStyle={[styles.navItemLabel, { color: pathname === '/profile' ? '#fff' : '#000' }]}
        style={{ backgroundColor: pathname === '/profile' ? '#333' : '#fff' }}
        onPress={() => {
          router.push('/(drawer)/profile');
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="settings-outline"
            size={size}
            color={pathname === '/settings' ? '#fff' : '#000'}
          />
        )}
        label={'Settings'}
        labelStyle={[styles.navItemLabel, { color: pathname === '/settings' ? '#fff' : '#000' }]}
        style={{ backgroundColor: pathname === '/settings' ? '#333' : '#fff' }}
        onPress={() => {
          router.push('/(drawer)/settings');
        }}
      />
    </DrawerContentScrollView>
  );
};
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="profile" options={{ headerShown: true }} />
        <Drawer.Screen name="settings" options={{ headerShown: true }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
});
