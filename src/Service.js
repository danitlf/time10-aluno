/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 const ENDPOINT = "http://animo10.brazilsouth.cloudapp.azure.com:8080/";

 export default {
     login: (username) => fetch(ENDPOINT+`aluno?nome=${username}`).then((data)=>data.json()).then((data)=>{
         if (data.length) {
            return data[0];
         } else {
             throw Error("Login ou senha inválido!");
         }
     }),
     marcarPresenca: (token,aluno) => fetch(ENDPOINT+'qrcode/validar', {
        method: "POST",
        body: JSON.stringify({
            "token":token,
            "aluno":aluno
        }),
        headers:{'Content-type':'application/json'}
    }).then((data)=>data.json().then(d=>d.id)),
    avaliar: (idPresenca,estrelas,descricao) => fetch(ENDPOINT+'avaliacao/avaliar', {
        method: "POST",
        body: JSON.stringify({
            "presencaId":idPresenca,
            "estrelas":estrelas,
            "descricao": descricao
        }),
        headers:{'Content-type':'application/json'}
    }).then((data)=>data.json()),
}