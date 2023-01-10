import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MealItem: FC<{
  title: string;
}> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
