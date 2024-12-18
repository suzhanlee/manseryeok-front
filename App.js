import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import MainScreen from "./src/screens/MainScreen";
import FortuneGrid from "./src/components/FortuneGrid";
import styles from "./src/styles/globalStyles";

const App = () => {
    const [showFortune, setShowFortune] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            {!showFortune ? (
                <MainScreen onShowFortune={() => setShowFortune(true)} />
            ) : (
                <FortuneGrid />
            )}
        </SafeAreaView>
    );
};

export default App;
