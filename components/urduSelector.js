// LanguageSelector.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const LanguageSelector = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleValueChange = (value) => {
    setSelectedLanguage(value);
    onLanguageChange(value);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.label}>Select Language:</Text> */}
      <Picker
        selectedValue={selectedLanguage}
        style={styles.picker}
        onValueChange={handleValueChange}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Urdu" value="ur" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start'  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: 150,
  },
});

export default LanguageSelector;
