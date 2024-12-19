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
    // 시간 입력 상태를 관리하는 로컬 state
    const [localBirthTime, setLocalBirthTime] = React.useState(birthTime || "");
    const [isTimeUnknown, setIsTimeUnknown] = React.useState(false);

    // 시간 변경 핸들러
    const handleBirthTimeChange = (time) => {
        setLocalBirthTime(time);
        setIsTimeUnknown(false);
        onBirthTimeChange(time); // 부모 컴포넌트에 변경 사항 전달
    };

    // "모름" 버튼 핸들러
    const handleUnknownTime = () => {
        setIsTimeUnknown(true);
        setLocalBirthTime("");
        onBirthTimeChange(null); // null을 부모 컴포넌트에 전달
    };

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
                <View style={styles.timeInputContainer}>
                    <TextInput
                        style={[styles.input, styles.timeInput]}
                        value={localBirthTime}
                        onChangeText={handleBirthTimeChange}
                        placeholder="HH:MM"
                        editable={!isTimeUnknown}
                    />
                    <TouchableOpacity
                        style={[
                            styles.unknownButton,
                            isTimeUnknown && styles.selectedButton,
                        ]}
                        onPress={handleUnknownTime}
                    >
                        <Text style={styles.unknownButtonText}>모름</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default UserInfoInput;
