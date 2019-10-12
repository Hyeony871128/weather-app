import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import proptTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Thunderstorm: {
        iconName: "",
        gradient:[]
    },
    Drizzle: {
        iconName: "",
        gradient:[]
    },
    Rain: {
        iconName: "",
        gradient:[]
    },
    Snow: {
        iconName: "",
        gradient:[]
    },
    Atmosphere: {
        iconName: "",
        gradient:[]
    },
    Clear: {
        iconName: "",
        gradient:[]
    },
    Clouds: {
        iconName: "weather-hurricane",
        gradient:["brown", "brown"]
    },
    Mist: {
        iconName: "",
        gradient:[]
    },
    Dust: {
        iconName: "",
        gradient:[]
    },
    Default:{
        iconName: "weather-sunny",
        gradient:["orange", "orange"]
    }
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={["red", "blue"]}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={condition?weatherOptions[condition].iconName:weatherOptions["Default"].iconName}
                    color="white" />
                <Text style={styles.temp}>{condition}</Text>
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.halfContainer} />
        </LinearGradient>
    );
}

Weather.proptTypes = {
    temp: proptTypes.number.isRequired,
    condition: proptTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 36,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})