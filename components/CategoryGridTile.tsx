import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

type CategoryGridTileProps = {
  title: string;
  color: string;
  onPressContainer: () => void;
};

const CategoryGridTile: FC<CategoryGridTileProps> = ({
  color,
  title,
  onPressContainer,
}) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : undefined,
        ]}
        onPress={onPressContainer}>
        <View style={[styles.container, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
