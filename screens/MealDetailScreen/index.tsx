import React, {FC, useLayoutEffect} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import MealDetails from '../../components/MealDetails';
import {MealDetailScreenProps} from '../../navigations/type';
import {MEALS} from '../../data/dummy-data';
import Subtitle from './components/Subtitle';

const MealDetailScreen: FC<MealDetailScreenProps> = ({route, navigation}) => {
  const {mealId} = route.params;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const favoriteHandle = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Favorite" color="white" onPress={favoriteHandle} />
      ),
    });
  });

  if (!selectedMeal) {
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{selectedMeal?.title}</Text>
        <Image source={{uri: selectedMeal?.imageUrl}} style={styles.image} />
        <MealDetails
          affordability={selectedMeal.affordability}
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          textStyles={styles.textDetail}
        />
        <Subtitle subtitle="Ingredients" data={selectedMeal.ingredients} />
        <Subtitle subtitle="Steps" data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  textDetail: {
    color: 'white',
    marginTop: 8,
  },
});
