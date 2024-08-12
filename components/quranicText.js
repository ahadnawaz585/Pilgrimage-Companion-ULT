import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import colors from '../Utils/colors';
import * as Speech from 'expo-speech';
import { MaterialIcons } from '@expo/vector-icons';

const QuranicText = ({ arabicText, englishTranslation, urduTranslation, language }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [speechInstance, setSpeechInstance] = useState(null);

    const speakText = (text) => {
        if (isPlaying) {
            Speech.stop();
            setIsPlaying(false);
        } else {
            const instance = Speech.speak(text, {
                language: language === 'er' ? 'er' : 'en', 
                onStart: () => setIsPlaying(true),
                onDone: () => setIsPlaying(false),
                onError: () => setIsPlaying(false),
            });
            setSpeechInstance(instance);
            setIsPlaying(true);
        }
    };

    const stopText = () => {
        if (speechInstance) {
            Speech.stop(speechInstance);
            setIsPlaying(false);
        }
    };

    // Determine the translation to display based on the selected language
    const getTranslation = () => {
        switch (language) {
            case 'ur':
                return urduTranslation;
            case 'en':
                return englishTranslation;
            default:
                return englishTranslation; // Default to English if no valid language is provided
        }
    };

    return (
        <View style={styles.quranicContainer}>
            <TouchableOpacity>
                <MaterialIcons 
                    onPress={isPlaying ? stopText : () => speakText(arabicText)} 
                    name={isPlaying ? "stop" : "volume-up"} 
                    size={20} 
                    color="#3f51b5" 
                />
                <Text selectable style={styles.arabicText}>{arabicText}</Text>
            </TouchableOpacity>
            <Text style={styles.translationText}>{getTranslation()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    quranicContainer: {
        backgroundColor: '#B0E0E6',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    arabicText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    translationText: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default QuranicText;
