import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Drawer: undefined;
  CategoriesScreen: undefined;
  MealsOverviewScreen: {
    categoryId: string;
  };
  MealDetailScreen: {
    mealId: string;
  };
};

export type RootDrawerParamList = {
  CategoriesScreen: undefined;
  FavoritesScreen: undefined;
};

export type CategoriesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CategoriesScreen'
>;

export type MealsOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MealsOverviewScreen'
>;

export type MealDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MealDetailScreen'
>;
