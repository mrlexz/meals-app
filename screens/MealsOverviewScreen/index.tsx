import React, {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {MealsOverviewScreenProps} from '../../navigations/type';
import {MEALS} from '../../data/dummy-data';
import MealItem from './components/MealItem';
import {MealT} from '../../models/meal';

const MealsOverviewScreen: FC<MealsOverviewScreenProps> = ({route}) => {
  const {categoryId} = route.params;

  const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

  const renderMealItem = (mealItem: MealT) => {
    return <MealItem title={mealItem.title} />;
  };
  return (
    <View style={styles.container}>
      <FlatList data={meals} renderItem={({item}) => renderMealItem(item)} />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
