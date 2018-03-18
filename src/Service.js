/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 const ENDPOINT = "http://animo10.brazilsouth.cloudapp.azure.com:8080/";

 export default {
     login: (username) => fetch(ENDPOINT+`aluno?nome=${username}`)
 }