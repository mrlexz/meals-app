import React, {FC, useLayoutEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {MealsOverviewScreenProps} from '../../navigations/type';
import {CATEGORIES, MEALS} from '../../data/dummy-data';
import MealItem from './components/MealItem';
import {MealT} from '../../models/meal';

const MealsOverviewScreen: FC<MealsOverviewScreenProps> = ({
  route,
  navigation,
}) => {
  const {categoryId} = route.params;

  const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(c => c.id === categoryId)?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const renderMealItem = (mealItem: MealT) => {
    return <MealItem mealItem={mealItem} />;
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
