import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 20,
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        marginBottom: 8,
        fontWeight: "500",
        color: "#333",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        backgroundColor: "#fff",
    },
    genderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },
    genderButton: {
        flex: 1,
        padding: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "#fff",
    },
    calendarTypeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },
    calendarButton: {
        flex: 1,
        padding: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "#fff",
    },
    selectedButton: {
        backgroundColor: "#e2e8f0",
        borderColor: "#94a3b8",
    },
    timeInputContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    timeInput: {
        flex: 1,
        marginRight: 10,
    },
    unknownButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#f0f0f0",
    },
    unknownButtonText: {
        color: "#333",
    },
});
