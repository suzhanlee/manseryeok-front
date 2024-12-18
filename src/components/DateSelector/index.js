import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const DateSelector = () => {
    return (
        <TouchableOpacity style={styles.dateContainer}>
            <Text>1900-01-01 양력</Text>
            <View style={styles.playButton}>
                <Text>▶</Text>
            </View>
        </TouchableOpacity>
    );
};

export default DateSelector;
