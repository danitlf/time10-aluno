/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image, StatusBar } from "react-native";
import { Button, Icon, Text, Item, Input } from "native-base";
import { NavigationScreenProps, NavigationActions } from "react-navigation";
import Service from "../../Service";

export default class extends Component<NavigationScreenProps> {
  static navigationOptions = {
      headerStyle: {
        backgroundColor: "#fff",
        borderBottomWidth: 0
      },
      headerTintColor: "#643796"
  };

  isGoingToHome = false

  constructor(props) {
    super(props);
    this.state = {
      username: ""
    }
  }

  componentDidMount = () => {
    StatusBar.setHidden(false);
  }
  
  componentWillUnmount() {
    StatusBar.setHidden(this.isGoingToHome ? false : true);
  }

  render() {
    return <View style={styles.containerStyle}>
        <Image source={require("../../../assets/images/anima.png")} style={{width:150,resizeMode:"contain", marginTop: -80}} />
        <Item style={{ borderBottomColor: "#643796" }}>
          <Icon style={{ color: "#643796" }} active name="ios-contact" />
          <Input placeholder="Usuário" onChangeText={(text)=>this.setState({username:text})} />
        </Item>
        <Item style={{ borderBottomColor: "#643796" }}>
          <Icon style={{ color: "#643796" }} active name="ios-key" />
          <Input placeholder="Senha" />
        </Item>
        <Button block style={{ marginTop: 50, backgroundColor: "#643796" }} onPress={()=>{
          Service.login(this.state.username).then((user)=>{
            this.props.store.login.nome = user.nome
            this.props.store.login.foto = user.foto
            this.props.store.login.matricula = user.matricula
            this.isGoingToHome = true;
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: "Main" })
              ]
            });
            this.props.navigation.dispatch(resetAction);
          }).catch((error)=>{
            alert(error.message);
          })
        }}>
          <Text>Login</Text>
        </Button>
      </View>;
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40
  },

  textProfessor: {
    fontSize: 40,
    color: "white",
    top: 80,
    position: "absolute"
  },

  labelBtn: {
    fontWeight: "600"
  },

  mainBtn: {
    width: 250,
    height: 60,
    marginTop: 10,
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "#643796",
    borderWidth: 1
  },

  iconBtn: {
    position: "absolute",
    left: 15
  }
});