/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Alert
} from "react-native";
import Camera from "react-native-camera";
import Service from "../../Service";

export default class extends Component {
  static navigationOptions = {
    title: "Escaneie o QRCode da Aula",
    headerTintColor: "#643796"
  };

  constructor(props) {
      super(props);
      this.state = {isQrCodeCaptured: false};
  }
  
  render() {
    return <View style={styles.container}>
        <Camera ref={cam => {
            this.camera = cam;
          }} style={styles.preview} aspect={Camera.constants.Aspect.fill} barCodeTypes={["qr"]} onBarCodeRead={(data, bounds) => {
            if (!this.state.isQrCodeCaptured) {
                this.setState({isQrCodeCaptured: true})
                Alert.alert(
                "Sucesso",
                "Presença marcada com sucesso!",
                [
                    {
                    text: "OK",
                    onPress: () => {
                        
                        // let data = '{"disciplina":{"nome":"Desenvolvimento Mobile","_id":"0d44c351-769e-4c5f-a0de-4a2edaa5d262","_rev":"1-ad696b275cb542cabe4dbb4773d0b533"},"professor":{"nome":"Bonato","foto":"teste","_id":"a6d8acd8-f9c4-4940-813e-2b83ccf4914c","_rev":"1-2f829fe7b59e4b529e1a8dbd71e78f3d"},"data":"2018-03-18T00:06:29.416Z","_id":"a60c64df-0e8e-45bc-923d-77966ac523ec","_rev":"1-47164790980641508f5d67a1db92efa6"}';
                        let aula = JSON.parse(data.data);

                        Service.marcarPresenca(data.data,this.props.store.login).then((presencaData)=>{
                          this.props.store.main.idPresenca = presencaData;
                          this.props.store.main.aula.payload = data;
                          this.props.store.main.isInClass = true;
                          this.props.store.main.aula._id = -1;
                          this.props.store.main.aula.disciplina = aula.disciplina.nome;
                          this.props.store.main.aula.professor = aula.professor.nome;
                          alert(data.data);
                          setTimeout(() => {
                            const PushNotification = require("react-native-push-notification");

                            PushNotification.localNotification(
                              {
                                /* iOS and Android properties */
                                title:
                                  "Anima - Presença Aluno", // (optional)
                                message:
                                  "Sua aula foi encerrada!", // (required)
                                playSound: false, // (optional) default: true
                                soundName: "default" // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                                //number: "10", // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
                                //repeatType: "day", // (Android only) Repeating interval. Could be one of `week`, `day`, `hour`, `minute, `time`. If specified as time, it should be accompanied by one more parameter 'repeatTime` which should the number of milliseconds between each interval
                              }
                            );
                          }, 5000);
                          this.props.navigation.goBack();
                        }).catch((error)=>{
                          alert(error.message);
                        });
                    }
                    }
                ],
                { cancelable: false }
                );
            }
          }}>
          <Image style={{ position: "absolute", top: 0, left: 0 }} source={require("../../../assets/images/qrcodeTarget.png")} />
          <Image style={{ position: "absolute", top: 0, right: 0, transform: [{ rotate: "90deg" }] }} source={require("../../../assets/images/qrcodeTarget.png")} />
          <Image style={{ position: "absolute", bottom: 0, left: 0, transform: [{ rotate: "270deg" }] }} source={require("../../../assets/images/qrcodeTarget.png")} />
          <Image style={{ position: "absolute", bottom: 0, right:0, transform: [{ rotate: '180deg'}] }} source={require("../../../assets/images/qrcodeTarget.png")} />
        </Camera>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    color: "#000",
    padding: 10,
    margin: 40
  }
});
