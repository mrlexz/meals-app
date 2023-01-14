import React from 'react';
import {FC} from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';

const MealDetails: FC<{
  duration: number;
  complexity: string;
  affordability: string;
  textStyles?: TextStyle;
}> = ({duration, complexity, affordability, textStyles}) => {
  return (
    <View style={styles.detailContainer}>
      <Text style={StyleSheet.flatten([styles.detailText, textStyles])}>
        {duration}
      </Text>
      <Text style={StyleSheet.flatten([styles.detailText, textStyles])}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={StyleSheet.flatten([styles.detailText, textStyles])}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
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
