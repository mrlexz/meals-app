import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import {CategoryT} from '../../models/category';
import CategoryGridTile from '../../components/CategoryGridTile';
import {CategoriesScreenProps} from '../../navigations/type';

const CategoriesScreen: FC<CategoriesScreenProps> = ({navigation}) => {
  const renderGridItem = (itemData: CategoryT) => {
    const onPressContainer = () => {
      navigation.navigate('MealsOverviewScreen', {
        categoryId: itemData.id,
      });
    };
    return (
      <CategoryGridTile
        onPressContainer={onPressContainer}
        color={itemData.color}
        title={itemData.title}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={({item}) => renderGridItem(item)}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
