import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../Utils/colors';
import tawafData from '../content/tawaf';
import QuranicText from '../components/quranicText';
import LanguageSelector from './urduSelector';

const TawafScreen = ({ navigation }) => {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (language) => {
        setLanguage(language);
    };

    const SPECIAL_PARAGRAPH_INDEX = {
        QURANIC_TEXT_1: 3,
        QURANIC_TEXT_2: 7,
        QURANIC_TEXT_3: 11,
        QURANIC_TEXT_4: 12,
        IMAGE_LAST_5: 13,
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
            <Text style={styles.sectionTitle}>{tawafData.sectionTitle[language]}</Text>
                <LanguageSelector onLanguageChange={handleLanguageChange} />
                <Image source={require('../assets/Images/Guide/tawaf.jpg')} style={styles.image} />
                <Image source={require('../assets/Images/Guide/tawaf2.jpg')} style={styles.image2} />
                {tawafData.paragraphs.map((paragraph, index) => (
                    <View key={index}>
                        {/* Check if subTitle exists and is a valid string */}
                        {paragraph.subTitle[language] ? (
                            <Text style={styles.subTitle}>{paragraph.subTitle[language]}</Text>
                        ) : null}

                        {/* Check if paragraph text exists and is a valid string */}
                        {paragraph.text[language] ? (
                            <Text style={styles.paragraph}>{paragraph.text[language]}</Text>
                        ) : null}

                        {/* Conditionally render QuranicText components */}
                        {index === SPECIAL_PARAGRAPH_INDEX.QURANIC_TEXT_1 && (
                            <>
                                <Text style={styles.note}>
                                    Although kissing the Hajar al-Aswad is very virtuous, it’s almost impossible to reach it. Don’t harm others around you in an attempt to get to it.
                                </Text>
                                <Text style={styles.note}>
                                    If you decide to attempt to kiss or touch Hajar al-Aswad, it is important to be aware that the experience can be intense. Due to the large number of people gathered around it, there is often a significant amount of pushing and shoving, which can potentially lead to injuries. It is nearly impossible to reach the Hajar al-Aswad without having to force your way through people vying to reach the sacred stone. Therefore, it’s recommended you remain safe and perform Istilam by saluting.
                                </Text>
                                <QuranicText arabicText="اَللَّهُمَّ إِنِّي أُرِيدُ طَوَافَ بَيْتِكَ الْحَرَامِ فَيَسِّرْهُ لِي وَتَقَبَّلْهُ مِنِّي ❁" englishTranslation="O Allah, I intend to perform Tawaf of your Sacred House, so make it easy for me and accept it from me." urduTranslation="اے اللہ میں تیرے حرمت والے گھر کا طواف کرنا چاہتا ہوں تو اسے میرے لیے آسان فرما اور مجھ سے قبول فرما۔" language={language} />
                                <QuranicText arabicText="بِسْمِ اللّٰهِ وَاللّٰهُ أَكْبَرُ ❁ اَللَّهُمَّ إِيمَاناً بِكَ وَتَصْدِيقاً بِكِتَابِكَ ❁ وَوَفَاءً بِعَهْدِكَ ❁ وَاتِّبَاعاً لِسُنَّةِ نَبِيِّكَ مُحَمَّدْ ❁" englishTranslation="In the name of Allah, Allah is the Greatest. O Allah, out of faith in You, conviction in Your book, in fulfilment of Your covenant and in emulation of Your Prophet’s sunnah ﷺ." language={language} urduTranslation="اللہ کے نام سے، اللہ سب سے بڑا ہے۔ اے اللہ، تجھ پر ایمان، تیری کتاب پر یقین، تیرے عہد کی تکمیل اور تیرے نبی صلی اللہ علیہ وسلم کی سنت کی تقلید میں۔" />
                                <QuranicText arabicText="اَللَّهُمَّ إِنِّي أُرِيدُ الْعُمْرَةَ فَيَسِّرْهَا لِي وَتَقَبَّلْهَا مِنِّي ❁" englishTranslation="O Allah, I intend to perform Umrah, so make it easy for me and accept it from me." language={language} urduTranslation="اے اللہ میں تیرے حرمت والے گھر کا طواف کرنا چاہتا ہوں تو اسے میرے لیے آسان فرما اور مجھ سے قبول فرما۔" />
                            </>
                        )}
                        {index === SPECIAL_PARAGRAPH_INDEX.QURANIC_TEXT_2 && (
                            <>
                                <QuranicText arabicText="رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ ❁" englishTranslation="O our Lord, grant us the good of this world, the good of the Hereafter, and save us from the punishment of the fire." language={language} urduTranslation="اے ہمارے رب ہمیں دنیا کی بھلائی اور آخرت کی بھلائی عطا فرما اور ہمیں آگ کے عذاب سے بچا۔" />
                            </>
                        )}
                        {index === SPECIAL_PARAGRAPH_INDEX.QURANIC_TEXT_3 && (
                            <>
                                <Image source={require('../assets/Images/Guide/tawaf4.jpg')} style={styles.image2} />
                                <QuranicText arabicText="وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى ❁" englishTranslation="And take the Maqam Ibrahim as a place of salah." language={language} urduTranslation="اور مقام ابراہیم کو صلاۃ کی جگہ سمجھو۔" />
                            </>
                        )}
                        {index === SPECIAL_PARAGRAPH_INDEX.QURANIC_TEXT_4 && (
                            <>
                                <Image source={require('../assets/Images/Guide/tawaf5.jpg')} style={styles.image} />
                                <QuranicText arabicText="إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا ❁ وَرِزْقًا وَاسِعًا ❁ وَعَمَلًا مُتَقَبَّّلًا ❁ وَشِفَاءً مِنْ كُلِّ دَاءٍ ❁" englishTranslation="O Allah, I ask You for knowledge that is beneficial, provision that is abundant, accepted deeds, and a cure for every illness." />
                            </>
                        )}
                        {index === SPECIAL_PARAGRAPH_INDEX.IMAGE_LAST_5 && (
                            <>
                                <Image source={require('../assets/Images/Guide/tawaf6.jpg')} style={styles.image2} />
                            </>
                        )}
                    </View>
                ))}
            </View>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ihram')}>
                    <Text style={styles.navigationText}>Ihram</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('sai')}>
                    <Text style={styles.navigationText}>Sa'i</Text>
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
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 40,
        color: colors.primary,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    paragraph: {
        marginBottom: 10,
    },
    note: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#B0E0E6',
        backgroundColor: '#F0FFFF',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200, // Adjust height as needed
        resizeMode: 'cover',
        marginBottom: 10,
    },
    image2: {
        width: '100%',
        height: 400, // Adjust height as needed
        resizeMode: 'cover',
        marginBottom: 10,
    },
    quranicContainer: {
        backgroundColor: '#B0E0E6',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
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

export default TawafScreen;
