/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import {Button, Icon, Text} from 'native-base';
import ClassificationModal from '../ClassificationModal';



export default class Main extends Component {
    static navigationOptions = {
        headerMode: 'none',
        header: null,
        navigationOptions: {
            gesturesEnabled: false
        }
    }


    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <ClassificationModal professor={this.props.store.main.aula.professor} disciplina={this.props.store.main.aula.disciplina} />
                <Text style={styles.textProfessor}>
                    Olá, {this.props.store.login.nome}
                </Text>
                {
                    this.props.store.main.isInClass ?
                    <Text style={{fontWeight: "bold", fontSize:26, color: "#fff", marginBottom:20}}>Você está em aula!</Text>
                    :
                    <TouchableOpacity style={styles.mainBtn} onPress={()=>{
                        this.props.navigation.navigate("QRCode")
                    }}>
                        <Icon style={styles.iconBtn} name='ios-qr-scanner' />
                        <Text style={styles.labelBtn}>Marcar presença</Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity style={styles.mainBtn} onPress={() => this.props.navigation.navigate("History")}>
                    <Icon style={styles.iconBtn} name='ios-list' />
                    <Text style={styles.labelBtn}>Histórico</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#643796',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textProfessor: {
        fontSize: 40,
        color: 'white',
        top: 80,
        position: 'absolute'
    },

    labelBtn: {
        fontWeight: '600',
    },

    mainBtn: {
        width: 250,
        height: 60,
        marginTop: 10,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },

    iconBtn: {
        position: 'absolute',
        left: 15
    }

});



