import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
// import {useFavorites} from '../../stores/Context/favorites-context';
import MealItem from '../MealsOverviewScreen/components/MealItem';
import {MealT} from '../../models/meal';
import {MEALS} from '../../data/dummy-data';
import {useAppSelector} from '../../stores/Redux/stores';

const FavoritesScreen = () => {
  // use Conext Management
  // const {favoriteIds} = useFavorites();
  // ---------------------

  // use Redux Management
  const {favoriteIds} = useAppSelector(state => state.favorites);
  const mealFavorites = MEALS.filter(meal => favoriteIds.includes(meal.id));

  const renderMealItem = (mealItem: MealT) => {
    return <MealItem mealItem={mealItem} />;
  };

  if (mealFavorites.length === 0) {
    return (
      <View style={styles.noItemContainer}>
        <Text style={styles.desc}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={mealFavorites}
        renderItem={({item}) => renderMealItem(item)}
      />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noItemContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  desc: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
});
