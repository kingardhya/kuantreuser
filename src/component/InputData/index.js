import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'

const InputData = ({ label, placeholder, keyboardType, isTextArea, onChangeText, namaState, value }) => {

    if (isTextArea) {
        return (
            <>
                <Text style={styles.label}> {label} : </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    placeholder={placeholder}
                    style={styles.TextInputArea}
                    keyboardType={keyboardType} 
                    value={value} 
                    onChangeText={(text) => onChangeText(namaState,text) }   
                />
            </>
        );
    }

    return (
        <>
            <Text style={styles.label}> {label} : </Text>
            <TextInput
                placeholder={placeholder}
                style={styles.TextInput}
                keyboardType={keyboardType} 
                value={value} 
                onChangeText={(text) => onChangeText(namaState,text) }   
            />
        </>
    );
}

export default InputData

const styles = StyleSheet.create({

    label: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 5
    },
    TextInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10

    },
    TextInputArea: {
        textAlignVertical: 'top',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10

    }
})
