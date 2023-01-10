import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  CategoriesScreen: undefined;
  MealsOverviewScreen: {
    categoryId: string;
  };
};

export type CategoriesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CategoriesScreen'
>;

export type MealsOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MealsOverviewScreen'
>;
