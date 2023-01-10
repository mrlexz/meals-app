import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CategoriesScreen">
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Stack.Screen
          name="MealsOverviewScreen"
          component={MealsOverviewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
