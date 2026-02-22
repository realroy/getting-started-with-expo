import { StyleSheet, Text, View } from "react-native";

export default function About() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={styles.heroText}>About</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    heroText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
});