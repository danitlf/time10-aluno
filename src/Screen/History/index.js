/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Card, CardItem, Right, Thumbnail, CheckBox } from 'native-base';
import { FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

export default class SearchBarExample extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this);
        this._renderAulas = this._renderAulas.bind(this);
        this.filterAulas = this.filterAulas.bind(this);

        this.filterAulas("");

    }

    _renderAulas = (aulas) => {
        return aulas.map((aula) => {
            return (
                <CardItem>
                    <Text>{aula.date}</Text> 
                    <Right>
                        <Icon style={{ color: "#643796" }} name={aula.check ? "md-checkmark": "md-close"}/> 
                    </Right> 
                </CardItem>
            );
        });
    }

    _renderItem = ({ item }) => (

        <Card>
            <CardItem header>
                <Text style={styles.disciplinaText}>{item.disciplina}</Text>
                <Right>
                    <Text style={styles.percentageText}>
                        {item.percentage}%
                    </Text>
                </Right>
            </CardItem>
            {this._renderAulas(item.aulas)}
        </Card>

    );

    filterAulas(search) {
        this.props.store.history.historyFiltered = this.props.store.history.history.filter((d) => {
            if (search == "") {
                return true;
            }
            return d.disciplina.toLowerCase().indexOf(search.toLowerCase()) != -1;
        })
    }

    render() {
        return (
            <Container>
                <StatusBar hidden={true} />
                <Header style={styles.headerSearch} searchBar rounded>

                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.iconBack} >
                        <Icon style={{ color: '#643796' }} name='arrow-back' />
                    </TouchableOpacity>
                    <Item>
                        <Icon style={{ color: '#643796' }} name="ios-search" /> 
                        <Input placeholder="Buscar" onChangeText={(textSearched) => { this.filterAulas(textSearched) }} />
                    </Item>
                </Header>
                <FlatList
                    data={this.props.store.history.historyFiltered}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index}
                />

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    cardList: {
        marginBottom: 0,
        marginTop: 1,
        height: 80,
        justifyContent: "center",
    },

    imageProfessor: {
        width: 60,
        height: 60,
        resizeMode: "stretch"
    },

    disciplinaText: {
        marginLeft: 10,
        fontSize: 18,
        width: 140,
        fontWeight: '800',
        color: '#643796'
    },

    percentageText: {
        fontWeight: '900',
        fontSize: 20,
    },

    iconBack: {
        marginRight: 20,
    },

    headerSearch: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }



});