import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#faf5ff",
    },
    labelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    labelText: {
        fontSize: 16,
        color: "#666",
        width: 80,
        textAlign: "center",
    },
    gridContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    gridItem: {
        width: 80,
        height: 80,
        backgroundColor: "#ffd7b5",
        borderRadius: 20, 
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    pinkItem: {
        backgroundColor: "#ffb5b5",
    },
    greenItem: {
        backgroundColor: "#b5ffb5",
    },
    charText: {
        fontSize: 28,
        fontWeight: "500",
    },
    luckButton: {
        backgroundColor: "#6b46c1",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 20,
    },
    luckButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
    luckContainer: {
        marginTop: 20,
    },
    luckSection: {
        marginBottom: 20,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    luckTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
        color: "#4a5568",
    },
    luckText: {
        fontSize: 24,
        fontWeight: "700",
        color: "#2d3748",
        textAlign: "center",
    },
    adviceText: {
        fontSize: 16,
        lineHeight: 24,
        color: "#4a5568",
    },
    expressionText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#2d3748",
        textAlign: "center",
    },
    celebrityText: {
        fontSize: 16,
        color: "#4a5568",
        textAlign: "center",
    },
});
