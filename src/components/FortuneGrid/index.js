import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import axios from "axios";
import styles from "./styles";

const FortuneGrid = ({ data, userData }) => {
    const [luckData, setLuckData] = useState(null);

    if (!data) return null;

    const parseGanji = (ganji, hourPillar) => {
        const mainParts = ganji.split(" ").map((part) => part.substring(0, 2));
        const hourPart = hourPillar;

        return {
            hour: hourPart, // 시주
            day: mainParts[2], // 일주
            month: mainParts[1], // 월주
            year: mainParts[0], // 연주
        };
    };

    const pillars = parseGanji(data.ganji, data.hourPillar);

    const upperRow = [
        pillars.hour[0], // 시주 천간
        pillars.day[0], // 일주 천간
        pillars.month[0], // 월주 천간
        pillars.year[0], // 연주 천간
    ];

    const lowerRow = [
        pillars.hour[1], // 시주 지지
        pillars.day[1], // 일주 지지
        pillars.month[1], // 월주 지지
        pillars.year[1], // 연주 지지
    ];

    const handleLuckPillars = async () => {
        try {
            const fourPillars =
                data.ganji.replace(/[年月日\s]/g, "") + data.hourPillar;
            const response = await axios.post(
                "http://localhost:8080/luckPillars",
                {
                    fourPillars,
                    gender: userData.gender,
                    birthDate: userData.birthDate,
                    calendarType: userData.calendarType,
                },
            );
            setLuckData(response.data);
        } catch (error) {
            console.error("대운 데이터 요청 실패:", error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.labelContainer}>
                    <Text style={styles.labelText}>시주</Text>
                    <Text style={styles.labelText}>일주</Text>
                    <Text style={styles.labelText}>월주</Text>
                    <Text style={styles.labelText}>연주</Text>
                </View>
                <View style={styles.gridContainer}>
                    {upperRow.map((char, index) => (
                        <View
                            key={`upper-${index}`}
                            style={[
                                styles.gridItem,
                                index === 2 && styles.pinkItem,
                            ]}
                        >
                            <Text style={styles.charText}>{char}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.gridContainer}>
                    {lowerRow.map((char, index) => (
                        <View
                            key={`lower-${index}`}
                            style={[
                                styles.gridItem,
                                index === 0 && styles.greenItem,
                            ]}
                        >
                            <Text style={styles.charText}>{char}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <TouchableOpacity
                style={styles.luckButton}
                onPress={handleLuckPillars}
            >
                <Text style={styles.luckButtonText}>대운 보기</Text>
            </TouchableOpacity>

            {luckData && (
                <View style={styles.luckContainer}>
                    <View style={styles.luckSection}>
                        <Text style={styles.luckTitle}>대운</Text>
                        <Text style={styles.luckText}>{luckData.daeUn}</Text>
                    </View>

                    <View style={styles.luckSection}>
                        <Text style={styles.luckTitle}>설명</Text>
                        <Text style={styles.adviceText}>
                            {luckData.commonAdvice}
                        </Text>
                    </View>

                    <View style={styles.luckSection}>
                        <Text style={styles.luckTitle}>상세 해설</Text>
                        <Text style={styles.adviceText}>
                            {luckData.specificAdvice}
                        </Text>
                    </View>

                    <View style={styles.luckSection}>
                        <Text style={styles.luckTitle}>표현</Text>
                        <Text style={styles.expressionText}>
                            {luckData.expression}
                        </Text>
                    </View>

                    <View style={styles.luckSection}>
                        <Text style={styles.luckTitle}>유명인</Text>
                        <Text style={styles.celebrityText}>
                            {luckData.celebrities}
                        </Text>
                    </View>
                </View>
            )}
        </ScrollView>
    );
};

export default FortuneGrid;
