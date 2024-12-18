import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const FortuneGrid = () => {
  const topChars = ['己', '丙', '己', '戊'];
  const bottomChars = ['卯', '辰', '未', '寅'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>사주팔자보기</Text>
      <View style={styles.gridContainer}>
        {topChars.map((char, index) => (
          <View key={`top-${index}`} style={[
            styles.gridItem,
            index === 1 && styles.pinkItem
          ]}>
            <Text style={styles.charText}>{char}</Text>
          </View>
        ))}
      </View>
      <View style={styles.gridContainer}>
        {bottomChars.map((char, index) => (
          <View key={`bottom-${index}`} style={[
            styles.gridItem,
            index === 3 && styles.greenItem
          ]}>
            <Text style={styles.charText}>{char}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default FortuneGrid;