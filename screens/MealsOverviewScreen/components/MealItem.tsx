import React, {FC} from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {MealT} from '../../../models/meal';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigations/type';
import MealDetails from '../../../components/MealDetails';

const MealItem: FC<{
  mealItem: MealT;
}> = ({mealItem}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => (pressed ? styles.buttonPressed : undefined)}
        onPress={() => {
          navigation.navigate('MealDetailScreen', {
            mealId: mealItem.id,
          });
        }}>
        <View style={styles.innerContainer}>
          <Image source={{uri: mealItem.imageUrl}} style={styles.image} />
          <Text style={styles.title}>{mealItem.title}</Text>
          <MealDetails
            affordability={mealItem.affordability}
            duration={mealItem.duration}
            complexity={mealItem.complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  detailText: {
    marginHorizontal: 4,
    fontSize: 14,
    marginBottom: 8,
  },
});
