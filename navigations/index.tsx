import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {RootDrawerParamList, RootStackParamList} from './type';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#d4511e'},
        headerTintColor: '#fff',
        sceneContainerStyle: {backgroundColor: '#99711e'},
        drawerContentStyle: {backgroundColor: '#99711e'},
        drawerActiveBackgroundColor: '#d4511e',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#ccc',
      }}>
      <Drawer.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Drawer.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CategoriesScreen"
        screenOptions={{
          headerStyle: {backgroundColor: '#d4511e'},
          headerTintColor: '#fff',
          contentStyle: {backgroundColor: '#99711e'},
        }}>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MealsOverviewScreen"
          component={MealsOverviewScreen}
        />
        <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
