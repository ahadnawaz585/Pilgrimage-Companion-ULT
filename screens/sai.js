import React,{useState} from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../Utils/colors';
import QuranicText from '../components/quranicText';
import LanguageSelector from './urduSelector';
import saiData from '../content/sai';
const SaiScreen = ({ navigation }) => {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (language) => {
        setLanguage(language);
    };

    const SPECIAL_PARAGRAPH_INDEX = {
        QURANIC_TEXT_1: 2,
        QURANIC_TEXT_2: 3,
        QURANIC_TEXT_3: 7,
        QURANIC_TEXT_4: 10,
        IMAGE_FIRST_1: 1,
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
            <Text style={styles.sectionTitle}>{saiData.sectionTitle[language]}</Text>
                <LanguageSelector onLanguageChange={handleLanguageChange} />
                <Image source={require('../assets/Images/Guide/Sai.jpeg')} style={styles.image} />
                {saiData.paragraphs.map((paragraph, index) => (
                    <View key={index}>
                        <Text style={styles.subTitle}>{paragraph.subTitle[language]}</Text>
                        <Text style={styles.paragraph}>{paragraph.text[language]}</Text>
                        {/* Conditionally render QuranicText components */}
                        {index === SPECIAL_PARAGRAPH_INDEX.IMAGE_FIRST_1 && (
                            <>
                                 <Image source={require('../assets/Images/Guide/Sai2.jpg')} style={styles.image} />
                <QuranicText arabicText="ِِإِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ الله ❁" englishTranslation="Indeed, Safa and Marwa are from the Signs of Allah." language={language} urduTranslation="بے شک صفا اور مروہ اللہ کی نشانیوں میں سے ہیں۔" />
                <QuranicText arabicText="ِِأَبْدَأُ بِمَا بَدَأَ اللهُ بِهِ ❁" englishTranslation="I begin with that which Allah has begun with." language={language} urduTranslation="میں اس سے شروع کرتا ہوں جس سے اللہ نے شروع کیا ہے۔" />
                <Image source={require('../assets/Images/Guide/Sai3.jpg')} style={styles.image} />
                            </>
                        )}
                        {index === SPECIAL_PARAGRAPH_INDEX.QURANIC_TEXT_1 && (
                            <>
                                <QuranicText arabicText="اللّٰهُ أَكْبَرُ ❁ اللّٰهُ أَكْبَرُ ❁ اللّٰهُ أَكْبَرُ ❁ وَلِلّٰهِ الْحَمْدُ ❁" englishTranslation="Allah is the Greatest; Allah is the Greatest; Allah is the Greatest, and to Allah belongs all praise."  language={language} urduTranslation="اللہ سب سے بڑا ہے۔ اللہ سب سے بڑا ہے۔ اللہ سب سے بڑا ہے اور تمام تعریفیں اللہ ہی کے لیے ہیں۔."/>
                <QuranicText arabicText="لَآ إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لاَ شَرِيكَ لَهُ ❁ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ ❁ يُحْيِي وَيُمِيتُ ❁ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ❁" englishTranslation="There is no deity except Allah, alone without a partner. To Him belongs the Dominion, and to Him belongs all praise. He gives life and death, and He has power over everything." language={language} urduTranslation="اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے جس کا کوئی شریک نہیں۔ اسی کے لیے بادشاہی ہے اور اسی کے لیے تمام تعریفیں ہیں۔ وہی زندگی اور موت دیتا ہے اور وہ ہر چیز پر قادر ہے۔" />
                <QuranicText arabicText="لَآ إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ ❁ اَنْجَزَ وَعْدَهُ وَنَصَرَ عَبْدَهُ وَهَزَمَ اَلْأَحْزَابَ وَحْدَهُ ❁" englishTranslation="There is no deity except Allah alone. He fulfilled His promise, supported His slave and defeated the Confederates alone." language={language} urduTranslation="اللہ کے سوا کوئی معبود نہیں۔ اس نے اپنا وعدہ پورا کیا، اپنے غلام کی حمایت کی اور کنفیڈریٹس کو تنہا شکست دی۔" />
                            </>
                        )}
                        {index === SPECIAL_PARAGRAPH_INDEX.QURANIC_TEXT_3 && (
                            <Image source={require('../assets/Images/Guide/Sai4.jpg')} style={styles.image} />
                        )}
                        {index === SPECIAL_PARAGRAPH_INDEX.QURANIC_TEXT_4 && (
                           <QuranicText arabicText="بِسْمِ اللهِ وَالصَّلَاةُ وَالسَّلَّامُ عَلَى رَسُولِ اللهِ ❁ اللّٰهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ ❁" englishTranslation="In the name of Allah, and peace and blessings be upon the Messenger of Allah. O Allah, I ask of you from Your bounty." language={language} urduTranslation="اللہ کے نام سے، اور درود و سلام ہو اللہ کے رسول پر۔ اے اللہ میں تجھ سے تیرے فضل سے سوال کرتا ہوں۔" />
                        )}
                    </View>
                ))}
               
                
            </View>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('tawaf')}>
                    <Text style={styles.navigationText}>Tawaf</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('halqtaqsir')}>
                    <Text style={styles.navigationText}>Halq or Taqsir</Text>
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

export default SaiScreen;
