/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { Button, Icon, Text, Item, Input } from "native-base";
import { NavigationScreenProps, NavigationActions } from "react-navigation";
import Modal from "react-native-modal";
import StarRating from 'react-native-star-rating';




export default class extends Component<NavigationScreenProps> {

    constructor(props) {
        super(props);

        this.state = {
            starCount: 0,
            text: "", 
            active: this.props.active

        }
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating,
        });
    }

    render() {
        return (
            <Modal
                isVisible={this.state.active}
                animationInTiming={1000}
                animationOutTiming={1000}
                backdropTransitionInTiming={1000}
                backdropTransitionOutTiming={1000}
            >
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>
                        Avalie sua aula
                    </Text>

                    <View style={{justifyContent: "flex-start", marginBottom: 20}}>
                        <Text style={styles.modalInfos}>Disciplina: {this.props.disciplina} </Text>
                        <Text style={styles.modalInfos}>Professor: {this.props.professor} </Text>
                    </View>

                    <StarRating
                        fullStarColor={'#643796'}
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />

                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.modalTextArea}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text} />

                    <View style={styles.modalBottom}>
                        <Button block style={{ marginTop: 50, backgroundColor: "#643796", width: 200 }} onPress={() => {
                            this.setState({active: false}) 
                        }}>
                            <Text>Enviar</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({

    modal: {
        backgroundColor: "white",
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

    modalInfos: {
        fontSize: 20, 
    },

    modalTitle: {
        fontSize: 30,
        color: "#643796",
        marginTop: 10,
        marginBottom: 30

    },

    modalTextArea: {
        borderColor: "gray",
        borderWidth: 1,
        width: 200,
        height: 60,
        marginTop: 20,
    },

    modalBottom: {
        marginTop: 20,
        marginBottom: 10
    },

    sendLabel: {
        fontSize: 20,

    },




});