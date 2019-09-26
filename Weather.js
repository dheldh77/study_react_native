import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        color: ["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "For more info look ouside",
        icon: "ios-rainy"
    },
    Clear: {
        color: ["#fef253", "#ff7300"],
        title: "Sunny",
        subtitle: "Go ouside",
        icon: "ios-sunny"
    },
    Thunderstorm: {
        color: ["#00ecbc", "#007adf"],
        title: "Thunderstrom",
        subtitle: "Don't Go ouside",
        icon: "ios-thunderstrom"
    },
    Clouds: {
        color: ["#d7d2cc", "#304352"],
        title: "Clouds",
        subtitle: "boring",
        icon: "ios-cloudy"
    },
    Snow: {
        color: ["#7de2fc", "#b9b6e5"],
        title: "Snow",
        subtitle: "very clod",
        icon: "ios-snow"
    },
    Drizzle: {
        color: ["#98f7fe", "#66a6ff"],
        title: "Drizzle",
        subtitle: "what is this?",
        icon: "ios-rainy-outline"
    },
    Haze: {
        color: ["#98f7fe", "#66a6ff"],
        title: "Drizzle",
        subtitle: "what is this?",
        icon: "ios-rainy-outline"
    },
}

function Weather({weatherName, temp}) {
    console.log(weatherName);
    return (
        <LinearGradient 
            colors={weatherCases[weatherName].color}
            style={styles.container}
        >
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName ].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    temp:{
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25,

    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24,
        fontWeight: "300",
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24,
    },
})
