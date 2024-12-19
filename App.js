import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import MainScreen from "./src/screens/MainScreen";
import FortuneGrid from "./src/components/FortuneGrid";
import styles from "./src/styles/globalStyles";

const App = () => {
    const [showFortune, setShowFortune] = useState(false);
    const [fortuneData, setFortuneData] = useState(null);
    const [userData, setUserData] = useState(null);

    const handleShowFortune = (apiResponse, userInputData) => {
        setFortuneData(apiResponse);
        setUserData(userInputData);
        setShowFortune(true);
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
