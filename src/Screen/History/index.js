/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Card, CardItem, Right, Thumbnail, CheckBox } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';

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
                        <CheckBox disabled checked={aula.check} />
                    </Right>
                </CardItem>
            );
        });
    }

    _renderItem = ({ item }) => (

        <Card>
            <CardItem header>
                <Thumbnail style={styles.imageProfessor} source={{ uri: 'https://abrilveja.files.wordpress.com/2016/05/professora-1-original4.jpeg' }} />
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
            if(search == "") {
                return true;
            }
            return d.disciplina.toLowerCase().indexOf(search.toLowerCase()) != -1;
        })
    }

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Buscar" onChangeText={(textSearched) => {this.filterAulas(textSearched)}} />
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
        backgroundColor: '#643796',
        justifyContent: 'center',
        alignItems: 'center',
    },

    cardList: {
        marginBottom: 0,
        marginTop: 2,
        height: 80,
        justifyContent: "center",
    },

    imageProfessor: {
        width: 60,
        height: 60,
        resizeMode: "stretch"
    },

    disciplinaText: {
        marginLeft: 20,
        fontSize: 18,
        width: 140,
        fontWeight: '800',
    },

    percentageText: {
        fontWeight: '900',
        fontSize: 20,
    }

});