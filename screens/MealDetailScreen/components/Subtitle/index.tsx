import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Subtitle: FC<{
  subtitle: string;
  data: string[];
}> = ({data, subtitle}) => {
  return (
    <>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.divider} />
      {data.map((dataPoint, idx) => (
        <View key={dataPoint} style={styles.itemWrapper}>
          <Text style={styles.textContentItem}>
            {idx + 1}. {dataPoint}
          </Text>
        </View>
      ))}
    </>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    color: '#e2b497',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  divider: {
    height: 2,
    backgroundColor: '#e2b497',
    marginVertical: 8,
  },
  itemWrapper: {
    padding: 8,
    backgroundColor: '#e2b497',
    marginVertical: 4,
    borderRadius: 8,
  },
  textContentItem: {
    color: 'black',
  },
});
