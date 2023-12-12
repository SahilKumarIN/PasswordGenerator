import { StyleSheet, Text, View, SafeAreaView, ScrollView, useColorScheme } from 'react-native'
import React from 'react'
import QueryingData from './components/QueryingData';

export default function App() {

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <ScrollView style={[isDarkMode ? styles.darkMode : styles.lightMode]}>

        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Text style={[isDarkMode ? styles.darkModeTxt : styles.lightModeTxt, styles.headerTxt]}>Password Generator</Text>
        </View>

        {/* Querying the requirements for Password */}
        <QueryingData />
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  // Stlying the dark/light modes of the Application
  darkMode: {
    backgroundColor: '#02021b',
    height: '100%'
  },
  lightMode: {
    backgroundColor: '#ffffff',
    height: '100%'
  },
  darkModeTxt: {
    color: '#9fa8da'
  },
  lightModeTxt: {
    color: '#0d080a'
  },

  // Now Components Styling
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 8
  },
  headerTxt: {
    fontSize: 35,
    fontWeight: '900',
    textAlign: 'center',
    fontFamily: 'cursive'
  }
})