import { StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

export default function QueryingData() {

    const isDarkMode = useColorScheme() === 'dark';

    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(true);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [passwordLength, setPasswordLength] = useState(null);
    const [password, setPassword] = useState(null);
    const [passGenerated, setPassGenerated] = useState(false);
    const [error, setError] = useState({ status: false, msg: null });

    const symbolPattern = "!@#$%^&*_+/|?."


    const generatePassword = () => {


        const passlngth = (+passwordLength)

        if (passlngth < 4) setError({ status: true, msg: "Length should be greater than 4" })

        else if (passlngth > 16) setError({ status: true, msg: "Length should be less than 16" })

        else {
            var passElem = ""
            if (lowerCase) passElem += "abcdefghijklmnopqrstuvwxyz"
            if (upperCase) passElem += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            if (numbers) passElem += "0123456789"
            if (symbols) passElem += symbolPattern
            var len = passElem.length
            var pass = ""
            for (var i = 0; i < passlngth; i++) {
                pass += passElem.charAt(Math.floor(Math.random() * len))
            }
            setPassword(pass)
            if (passlngth !== 0) setPassGenerated(true)
        }

    }
    const resetQuery = () => {
        setUpperCase(false);
        setLowerCase(true);
        setNumbers(false);
        setSymbols(false);
        setPasswordLength();
        setError({ status: false, msg: null })
        setPassword('')
        setPassGenerated(false)
    }
    return (
        <View style={styles.queryDataContainer}>
            <View style={styles.txtInputContainer}>
                <View>
                    <Text style={[isDarkMode ? styles.darkModeTxt : styles.lightModeTxt , {fontSize: 18}]}>Password Length :</Text>
                    {error.status ? <Text style={styles.errorTxt}>{error.msg}</Text> : null}
                    {/*  */}
                </View>
                <View>
                    <TextInput
                        placeholder='Ex. 8'
                        style={[styles.txtInput, isDarkMode ? styles.darkModeTxt : styles.lightModeTxt]}
                        keyboardType='numeric'
                        value={passwordLength}
                        onChangeText={text => setPasswordLength(text)}
                    /></View>
            </View>
            <View style={styles.chkBox}>
                <Text style={[isDarkMode ? styles.darkModeTxt : styles.lightModeTxt , {fontSize: 18}]}>includes uppercase A-Z</Text>
                <BouncyCheckbox
                    fillColor='#FF3031'
                    isChecked={upperCase}
                    onPress={() => { setUpperCase(!upperCase) }}
                />
            </View>
            <View style={styles.chkBox}>
                <Text style={[isDarkMode ? styles.darkModeTxt : styles.lightModeTxt , {fontSize: 18}]}>includes lowercase a-z </Text>
                <BouncyCheckbox
                    fillColor='#25CCF7'
                    isChecked={lowerCase}
                    onPress={() => { setLowerCase(!lowerCase) }}
                />
            </View>
            <View style={styles.chkBox}>
                <Text style={[isDarkMode ? styles.darkModeTxt : styles.lightModeTxt , {fontSize: 18}]}>includes number 0-9</Text>
                <BouncyCheckbox
                    fillColor='#26ae60'
                    isChecked={numbers}
                    onPress={() => { setNumbers(!numbers) }}
                />
            </View>
            <View style={styles.chkBox}>
                <Text style={[isDarkMode ? styles.darkModeTxt : styles.lightModeTxt , {fontSize: 18}]}>includes symbols !@#$%^&*_+/|?.</Text>
                <BouncyCheckbox
                    fillColor='#4834DF'
                    isChecked={symbols}
                    onPress={() => { setSymbols(!symbols) }}
                />
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity
                    onPress={generatePassword}
                >
                    <View style={styles.btn}>
                        <Text style={[styles.btnTxt]}>Generate Password</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={resetQuery}
                >
                    <View style={styles.btn}>
                        <Text style={[styles.btnTxt]}>Reset</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {
                passGenerated ?
                    <View style={styles.passContainer}>
                        <Text style={[styles.passHeading, isDarkMode]}>Your Password</Text>
                        <Text style={[styles.passDescription, isDarkMode]}>Long Press to Copy</Text>
                        <Text selectable style={[styles.passTxt]}>{password}</Text>
                    </View>
                    : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    // Dark/Light Mode Txts
    darkModeTxt: {
        color: '#9fa8da'
        
    },

    lightModeTxt: {
        color: '#0d080a'
    },

    // Components Styling
    queryDataContainer: {

    },
    txtInputContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        padding: 6
    },
    errorTxt: {
        color: 'red',
        fontSize: 14
    },
    txtInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        fontSize: 18,
        padding: 0
    },
    chkBox: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 6,
        margin: 10
    },
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',

    },
    btn: {
        backgroundColor: '#26ae60',
        width: '200',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        margin: 20
    },
    btnTxt: {
        color: '#c8e6c9',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    passContainer: {
        width: '80%',
        backgroundColor: '#1a237e',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 12
    },
    passHeading: {
        fontSize: 28,
        color: '#1976d2',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    passDescription: {
        fontSize: 16,
        color: '#c5cae9',
        fontWeight: '700',
        textAlign: 'center'
    },
    passTxt: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff'
    }
})