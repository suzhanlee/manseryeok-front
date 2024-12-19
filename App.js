import React, { useState } from "react";
import { SafeAreaView, Alert } from "react-native";
import MainScreen from "./src/screens/MainScreen";
import FortuneGrid from "./src/components/FortuneGrid";
import styles from "./src/styles/globalStyles";

const App = () => {
    const [showFortune, setShowFortune] = useState(false);
    const [fortuneData, setFortuneData] = useState(null);
    const [userData, setUserData] = useState(null);

    const handleShowFortune = (ganjiData, userData) => {
        if (ganjiData && ganjiData.ganji && ganjiData.hourPillar) {
            setFortuneData(ganjiData);
            setUserData(userData);
            setShowFortune(true);
        } else {
            Alert.alert("오류", "사주 데이터를 가져오는데 실패했습니다.");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {!showFortune ? (
                <MainScreen onShowFortune={handleShowFortune} />
            ) : (
                <FortuneGrid
                    data={fortuneData}
                    userData={userData}
                    onBack={() => {
                        setShowFortune(false);
                        setFortuneData(null);
                        setUserData(null);
                    }}
                />
            )}
        </SafeAreaView>
    );
};

export default App;
