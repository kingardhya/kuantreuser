import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native'
import { InputData } from '../../component'
//import FIREBASE from '../../config/FIREBASE'

//import {firebase, firestorage, storage} from '../../config/firebase'
import firebaseConfig from '../../config/firebase'

export default class EditKontak extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: '',
            nomorhp: '',
            alamat: ''
        }
    }

    componentDidMount(){
        firebaseConfig.database()
        .ref('Kontak/'+ this.props.route.params.id)
        .once('value', (querySnapshot) => {

            let data = querySnapshot.val() ? querySnapshot.val() : {};
            let kontakItem = {...data};

            this.setState({
                nama: kontakItem.nama,
                nomorhp: kontakItem.nomorhp,
                alamat: kontakItem.alamat
            })
        })
    }

    onChangeText = (namaState, value) => {
        this.setState({
            [namaState]: value
        })
    }

    onSubmit = () => {
        if (this.state.nama && this.state.nomorhp && this.state.alamat) {

            const kontakReferensi = firebaseConfig.database().ref('Kontak/'+ this.props.route.params.id)
            const kontak = {
                nama: this.state.nama,
                nomorhp: this.state.nomorhp,
                alamat: this.state.alamat
            }

            kontakReferensi
                .update(kontak)
                .then((data) => {
                    Alert.alert('Success','Kontak Terupdate');
                    this.props.navigation.replace('Home');
                })
                .catch ((error) => {
                    console.log("Error :", error);
                })

        }else{
            Alert.alert('Error','Harus lengkap bos');
        }

    }


    render() {
        return (
            <View style={styles.page}>
                <InputData
                    label="Nama"
                    placeholder="Masukkan Nama"
                    onChangeText={this.onChangeText}
                    value={this.state.nama}
                    namaState="nama"
                />
                <InputData
                    label="No. HP"
                    placeholder="Masukkan Nomor HP"
                    keyboardType="number-pad"
                    onChangeText={this.onChangeText}
                    value={this.state.nomorhp}
                    namaState="nomorhp"
                />
                <InputData
                    label="Alamat"
                    placeholder="Masukkan Alamat"
                    isTextArea={true}
                    onChangeText={this.onChangeText}
                    value={this.state.alamat}
                    namaState="alamat"
                />

                <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
                    <Text style={styles.textTombol}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        padding: 30
    },
    tombol: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    textTombol: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    }
})
