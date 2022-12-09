const User = require("./usuario");
const moment = require("moment");

class Doador extends User {
  ultimaDoacao = "";
  proximaDoacao = "";

  constructor(nome, CPF, email, senha, endereco, tipoSanguineo) {
    super(nome, CPF, email, senha, endereco, tipoSanguineo);
  }

  realizaDoacao(data) {
    this.ultimaDoacao = data;

    this.atualizaProximaDoacao();
  }

  getUltimaDoacao() {
    return moment(this.ultimaDoacao).format("DD/MM/YYYY");
  }

  atualizaProximaDoacao() {
    this.proximaDoacao = moment(this.ultimaDoacao)
      .add(4, "month")
      .format("DD/MM/YYYY");
  }

  notificaProximaDoacao() {
    let mensagem = `Sua próxima doação pode ser realizada a partir de ${this.proximaDoacao}`;
    console.log(mensagem);
    return mensagem;
  }
}

module.exports = Doador;
