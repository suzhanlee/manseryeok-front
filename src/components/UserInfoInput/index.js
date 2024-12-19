import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

const UserInfoInput = ({
    name,
    onNameChange,
    birthDate,
    onBirthDateChange,
    calendarDate,
    onCalendarDateChange,
    birthTime,
    onBirthTimeChange,
    gender,
    onGenderChange,
}) => {
    return (
        <View style={styles.container}>
            {/* 이름 입력 */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>이름</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={onNameChange}
                    placeholder="이름을 입력하세요"
                />
            </View>

            {/* 성별 선택 */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>성별</Text>
                <View style={styles.genderContainer}>
                    <TouchableOpacity
                        style={[
                            styles.genderButton,
                            gender === "man" && styles.selectedButton,
                        ]}
                        onPress={() => onGenderChange("man")}
                    >
                        <Text>남자</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.genderButton,
                            gender === "woman" && styles.selectedButton,
                        ]}
                        onPress={() => onGenderChange("woman")}
                    >
                        <Text>여자</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* 생년월일 입력 */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>생년월일</Text>
                <TextInput
                    style={styles.input}
                    value={birthDate}
                    onChangeText={onBirthDateChange}
                    placeholder="YYYY-MM-DD"
                />
            </View>

            {/* 양력/음력 선택 */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>양력/음력</Text>
                <View style={styles.calendarTypeContainer}>
                    <TouchableOpacity
                        style={[
                            styles.calendarButton,
                            calendarDate === "양력" && styles.selectedButton,
                        ]}
                        onPress={() => onCalendarDateChange("양력")}
                    >
                        <Text>양력</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.calendarButton,
                            calendarDate === "음력" && styles.selectedButton,
                        ]}
                        onPress={() => onCalendarDateChange("음력")}
                    >
                        <Text>음력</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* 태어난 시간 입력 */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>태어난 시간</Text>
                <TextInput
                    style={styles.input}
                    value={birthTime}
                    onChangeText={onBirthTimeChange}
                    placeholder="HH:MM"
                />
            </View>
        </View>
    );
};

export default UserInfoInput;
