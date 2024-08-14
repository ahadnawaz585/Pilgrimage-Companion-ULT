import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../Utils/colors';
import QuranicText from '../components/quranicText';
import halqtaqsirData from '../content/halqTaqsir';
import LanguageSelector from './urduSelector';

const HalqandTaqsirScreen = ({ navigation }) => {

    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (language) => {
        setLanguage(language);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
            <Text style={styles.sectionTitle}>{halqtaqsirData.sectionTitle[language]}</Text>
            <LanguageSelector onLanguageChange={handleLanguageChange} />
                <Image source={require('../assets/Images/Guide/halqtaqsir.jpeg')} style={styles.image} />

                {halqtaqsirData.paragraphs.map((paragraph, index) => (
                    <View key={index}>
                        <Text style={styles.paragraph}>{paragraph.text[language]}</Text>
                        {/* Conditionally render QuranicText components */}
                     
                    </View>
                ))}
            </View>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('tawaf')}>
                    <Text style={styles.navigationText}>Tawaf</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ihram')}>
                    <Text style={styles.navigationText}>Ihram</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.white,
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.primary,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: colors.secondary,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 20,
        color: colors.text,
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    navigationText: {
        fontSize: 18,
        color: colors.primary,
    },
});

export default HalqandTaqsirScreen;
