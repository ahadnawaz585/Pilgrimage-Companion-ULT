import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../Utils/colors';
import QuranicText from '../components/quranicText';
import ihramData from '../content/Ihram';
import LanguageSelector from './urduSelector';

const IhramScreen = ({ navigation }) => {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (language) => {
        setLanguage(language);
    };

    // Define constants for paragraph indices
    const SPECIAL_PARAGRAPH_INDEX = {
        QURANIC_TEXT_1: 4,
        QURANIC_TEXT_2: 8,
        QURANIC_TEXT_3: 5,
        QURANIC_TEXT_4: 6
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{ihramData.sectionTitle[language]}</Text>
                <LanguageSelector onLanguageChange={handleLanguageChange} />
                <Image source={ihramData.imageSource} style={styles.image} />
                {ihramData.paragraphs.map((paragraph, index) => (
                    <View key={index}>
                        <Text style={styles.subTitle}>{paragraph.subTitle[language]}</Text>
                        <Text style={styles.paragraph}>{paragraph.text[language]}</Text>
                        {/* Conditionally render QuranicText components */}
                        {index === SPECIAL_PARAGRAPH_INDEX.QURANIC_TEXT_1 && (
                            <>
                                <QuranicText arabicText="لَبَّيْكَ اَللَّهُمَّ عُمْرَةً ❁" englishTranslation="O Allah, here I am to perform Umrah." urduTranslation="اے اللہ میں یہاں عمرہ کرنے آیا ہوں۔" language={language} />
                                <QuranicText arabicText="اَللَّهُمَّ إِنِّي أُرِيدُ الْعُمْرَةَ ❁" englishTranslation="O Allah, I intend to perform Umrah." urduTranslation="اے اللہ میں عمرہ کرنے کا ارادہ رکھتا ہوں۔" language={language} />
                                <QuranicText arabicText="اَللَّهُمَّ إِنِّي أُرِيدُ الْعُمْرَةَ فَيَسِّرْهَا لِي وَتَقَبَّلْهَا مِنِّي ❁" englishTranslation="O Allah, I intend to perform Umrah, so make it easy for me and accept it from me." urduTranslation="اے اللہ میں عمرہ کرنے کا ارادہ رکھتا ہوں تو اسے میرے لیے آسان فرما اور مجھ سے قبول فرما۔" language={language} />
                            </>
                        )}
                        {index === SPECIAL_PARAGRAPH_INDEX.QURANIC_TEXT_2 && (
                            <>
                                <QuranicText arabicText="بِسْمِ اللهِ ❁ اَللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ ❁ اللّٰهُمَّ اغْفِرْ لِي وَافْتَحْ لِي أَبْوَابَ رَحْمَتِكَ ❁" englishTranslation="In the name of Allah, send prayers upon Muhammad ﷺ. O Allah, forgive me and open for me the doors of Your Mercy." urduTranslation="اللہ کے نام سے محمد صلی اللہ علیہ وسلم پر درود بھیجیں۔ اے اللہ مجھے بخش دے اور میرے لیے اپنی رحمت کے دروازے کھول دے۔" language={language} />
                                <QuranicText arabicText="أَعُوذُ بِاللهِ الْعَظِيمِ ❁ وَبِوَجْهِهِ الْكَرِيمِ ❁ وَسُلْطَانِهِ الْقَدِيمِ ❁ مِنَ الشَّيْطَانِ الرَّجِيمِ ❁" englishTranslation="I seek protection in Allah the Tremendous, His Noble Countenance, and His pre-eternal Sovereign Might from Shaytan the rejected." urduTranslation="میں اللہ سے پناہ مانگتا ہوں جو زبردست ہے، اس کے مہربان چہرے سے، اور شیطان مردود سے اس کی ابدی حاکمیت چاہتا ہوں۔" language={language} />
                                <QuranicText arabicText="اللّٰهُ أَكْبَرُ ❁ اللّٰهُ أَكْبَرُ ❁ لَآ اِلَهَ اِلَّا اللّٰهُ ❁" englishTranslation="Allāhu akbar. Allāhu akbar. Lā ilāha illa Llāh.Allah is the Greatest. Allah is the Greatest. There is no God except Allah." urduTranslation="میں اللہ سے پناہ مانگتا ہوں جو زبردست ہے، اس کے مہربان چہرے سے، اور شیطان مردود سے اس کی ابدی حاکمیت چاہتا ہوں۔" language={language} />
                            </>
                        )}
                        {index === SPECIAL_PARAGRAPH_INDEX.QURANIC_TEXT_3 && (
                            <QuranicText arabicText="لَبَّيْكَ اَللَّهُمَّ لَبَّيْكَ – لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ – إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ – لَا شَرِيكَ لَكَ – ❁" englishTranslation="At Your service, Allah, at Your service. At Your service, You have no partner, at Your service. Truly all praise, favour and sovereignty are Yours. You have no partner." urduTranslation="آپ کی خدمت میں، اللہ، آپ کی خدمت میں۔ تیری خدمت میں، تیرا کوئی شریک نہیں، تیری خدمت میں۔ بے شک تمام تعریفیں، احسان اور بادشاہت تیری ہی ہے۔ تمہارا کوئی شریک نہیں ہے۔" language={language} />
                        )}
                        {index === SPECIAL_PARAGRAPH_INDEX.QURANIC_TEXT_4 && (
                            <QuranicText arabicText="اَللَّهُمَّ هَذَا حَرَمُكَ وَأَمْنُكَ فَحَرِّمْنِي عَلَى النَّارِ ❁ وَأَمِنِّي مِنْ عَذَابِكَ يَوْمَ تَبْعَثُ عِبَادَكَ ❁ وَاجْعَلْنِي مِنْ أَوْلِيَائِكَ وَأَهْلِ طَاعَتِكَ ❁" englishTranslation="O Allah, this is Your sanctuary and security, so make me unlawful to the hellfire, make me safe from Your punishment on the day You resurrect Your servants, and make me one of Your friends and one of the people who obey You." urduTranslation="اے اللہ یہ تیری حرمت اور سلامتی ہے تو مجھے جہنم کی آگ پر حرام کر، جس دن تو اپنے بندوں کو زندہ کرے گا اس دن مجھے اپنے عذاب سے محفوظ رکھ اور مجھے اپنے دوستوں میں سے اور تیری اطاعت کرنے والوں میں سے بنا۔" language={language} />
                        )}
                    </View>
                ))}
            </View>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('guidance')}>
                    <Text style={styles.navigationText}>Go Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('tawaf')}>
                    <Text style={styles.navigationText}>Tawaf al-Umrah</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

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

export default IhramScreen;
