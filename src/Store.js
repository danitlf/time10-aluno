import { observable } from "mobx";

export default observable({
  willDisplayAvaliation: false,
  login: {
    nome: undefined,
    foto: undefined,
    matricula: undefined,
    _id: undefined,
    _rev: undefined
  },
  history: {

    historyFiltered: [],
    history: [
      {
        disciplina: "Disciplina 1",
        percentage: 70,
        aulas: [
          { date: "17/02/2018", check: true },
          { date: "16/02/2018", check: true },
          { date: "15/02/2018", check: false }
        ]
      },
      {
        disciplina: "Disciplina 2",
        percentage: 30,
        aulas: [
          { date: "17/02/2018", check: false },
          { date: "16/02/2018", check: true }
        ]
      }
    ]
  },
  main: {
      isInClass: false,
      idPresenca: "",
      aula: {
        payload: "",
        _id: undefined,
        disciplina: "",
        professor: "",
        data: undefined
      }
  },
  qrCode: {}
});