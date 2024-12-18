// src/screens/MainScreen.js
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import GenderSelector from "../components/GenderSelector";
import DateSelector from "../components/DateSelector";
import styles from "../styles/globalStyles";

// navigation 대신 onShowFortune props를 받도록 수정
const MainScreen = ({ onShowFortune }) => {
  return (
    <View style={styles.container}>
      <GenderSelector />
      <DateSelector />
      <TouchableOpacity 
        style={styles.button}
        onPress={onShowFortune}  // navigation.navigate 대신 onShowFortune 사용
      >
        <Text>사주 뽑아보기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;