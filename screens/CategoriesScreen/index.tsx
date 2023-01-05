import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import {CategoryT} from '../../models/category';
import CategoryGridTile from '../../components/CategoryGridTile';

const CategoriesScreen = () => {
  const renderGridItem = (itemData: CategoryT) => {
    return <CategoryGridTile color={itemData.color} title={itemData.title} />;
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
