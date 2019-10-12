import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import proptTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["blue", "blue"],
        title: "Thunderstorm",
        subtitle: "Today is Thunderstorm"
    },
    Drizzle: {
        iconName: "weather-pouring",
        gradient: ["blue", "red"],
        title: "Drizzle",
        subtitle: "Today is Drizzle"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["red", "yellow"],
        title: "Rain",
        subtitle: "Today is Rain"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["yellow", "green"],
        title: "Snow",
        subtitle: "Today is Snow"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["green", "black"],
        title: "Atmosphere",
        subtitle: "Today is Atmosphere"
    },
    Mist: {
        iconName: "weather-sunset",
        gradient: ["black", "yellow"],
        title: "Mist",
        subtitle: "Today is Mist"
    },
    Smoke: {
        iconName: "weather-lightning-rainy",
        gradient: ["yellow", "blue"],
        title: "Smoke",
        subtitle: "Today is Smoke"
    },
    Haze: {
        iconName: "weather-night",
        gradient: ["blue", "black"],
        title: "Haze",
        subtitle: "Today is Haze"
    },
    Dust: {
        iconName: "weather-partlycloudy",
        gradient: ["indigo", "indigo"],
        title: "Dust",
        subtitle: "Today is Dust"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["olive", "olive"],
        title: "Fog",
        subtitle: "Today is Fog"
    },
    Sand: {
        iconName: "weather-sunset-down",
        gradient: ["pink", "pink"],
        title: "Sand",
        subtitle: "Today is Sand"
    },
    Ash: {
        iconName: "weather-sunset-up",
        gradient: ["salmon", "salmon"],
        title: "Ash",
        subtitle: "Today is Ash"
    },
    Squall: {
        iconName: "weather-hurricane",
        gradient: ["tan", "tan"],
        title: "Squall",
        subtitle: "Today is Squall"
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["brown", "brown"],
        title: "Tornado",
        subtitle: "Today is Tornado"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["orange", "orange"],
        title: "Clear",
        subtitle: "Today is Clear"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["gray", "gray"],
        title: "Clouds",
        subtitle: "Today is Clouds"
    },
    Default:{
        iconName: "weather-sunny",
        gradient:["orange", "orange"],
        title: "",
        subtitle: ""
    }
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={condition? weatherOptions[condition].gradient: weatherOptions["Default"].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={condition?weatherOptions[condition].iconName:weatherOptions["Default"].iconName}
                    color="white" />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{condition}</Text>
                <Text style={styles.subtitle}>
                    {condition? weatherOptions[condition].subtitle:  weatherOptions["Default"].subtitle}
                </Text>
            </View>
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
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        textAlign: "left"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})