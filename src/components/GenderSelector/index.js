import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const GenderSelector = () => {
  const [selectedGender, setSelectedGender] = useState('male');

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.button, selectedGender === 'male' && styles.selected]}
        onPress={() => setSelectedGender('male')}
      >
        <Text>남자</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, selectedGender === 'female' && styles.selected]}
        onPress={() => setSelectedGender('female')}
      >
        <Text>여자</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenderSelector;