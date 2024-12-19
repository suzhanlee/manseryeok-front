import React, { useState } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import axios from "axios";
import UserInfoInput from "../components/UserInfoInput";
import styles from "../styles/globalStyles";

const MainScreen = ({ onShowFortune }) => {
    const [name, setName] = useState("홍길동");
    const [gender, setGender] = useState("man");
    const [birthDate, setBirthDate] = useState("1900-01-01");
    const [calendarType, setCalendarType] = useState("양력");
    const [birthTime, setBirthTime] = useState("23:05");

    const handleSubmit = async () => {
        try {
            const userData = {
                birthDate,
                calendarType,
                gender,
                name,
                birthTime,
            };

            const response = await axios.post(
                "http://localhost:8080/manSeryeok",
                userData,
            );
            console.log("API 응답:", response.data);
            onShowFortune(response.data, userData);
        } catch (error) {
            console.error("에러 발생:", error);
            Alert.alert("오류", "API 요청 실패: " + error.message);
        }
    };

    return (
        <View style={styles.container}>
            <UserInfoInput
                name={name}
                onNameChange={setName}
                gender={gender}
                onGenderChange={setGender}
                birthDate={birthDate}
                onBirthDateChange={setBirthDate}
                calendarDate={calendarType}
                onCalendarDateChange={setCalendarType}
                birthTime={birthTime}
                onBirthTimeChange={setBirthTime}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>사주 뽑아보기</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MainScreen;
