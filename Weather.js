import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions ={
    Clear: {
        iconName: "sunny",
        gradient: ['#F9D423','#FF4E50'],
        title: "Sunny Day!",
        subtitle: "Let's go outside!"
    },
    //Snow","Atmosphere","Clear","Clouds","Haze"
    Thunderstrom: {
        iconName: "thunderstorm",
        gradient: ['#3fada8','black'],
        title: "Thunderstrom",
        subtitle: "Be careful"
    },
    Rain: {
        iconName: "rainy",
        gradient: ['#45a247','#283c86'],
        title: "Rain",
        subtitle: "Don't forget to bring your umbrella"
    },
    Snow: {
        iconName: "snow",
        gradient: ['#A7BFE8','gray'],
        title: "Snow",
        subtitle: "Let's go make a snowman"
    },
    Clouds: {
        iconName: "cloud",
        gradient: ['gray','#20002c'],
        title: "Cloud",
        subtitle: "I don't like cloudy days"
    },
};

export default function Weather({temp, condition}){
    return(
        
            <LinearGradient  style={styles.container}
            colors={weatherOptions[condition].gradient}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.halfContainer}>
                    <Ionicons 
                    size={90} 
                    name={weatherOptions[condition].iconName}
                    color="white" />
                    <Text style={styles.temp}>{temp}℃</Text>
                </View>
                <View style={{ ...styles.halfContainer,...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </LinearGradient>
        
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm","Rain","Snow","Atmosphere","Clear","Clouds","Haze"
    ]).isRequired
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp:{
        fontSize: 30,
        color: "white",
    },
    halfContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        
        color:"white",
        fontSize: 30,
        fontWeight:"300",
        marginBottom: 10,
    },
    subtitle: {
        fontWeight: "600",
        color:"white",
        fontSize: 20,
    },
    textContainer: {
        width:"100%",
        paddingHorizontal:20,
        alignItems: "flex-start",
    },
})