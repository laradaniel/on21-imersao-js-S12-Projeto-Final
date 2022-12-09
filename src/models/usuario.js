const Endereco = require("./endereco");

class User {
  nome;
  #CPF;
  email;
  senha;
  endereco;
  tipoSanguineo;

  criaUsuario(nome, CPF, email, senha, endereco, tipoSanguineo) {
    if (this.validaEmail(email) && this.validaCPF(CPF)) {
      this.nome = nome;
      this.#CPF = CPF;
      this.email = email;
      this.senha = senha;
      this.endereco = endereco;
      this.tipoSanguineo = tipoSanguineo;

      return "Usuário criado com sucesso.";
    } else {
      throw new Error("Dados Inválidos");
    }
  }

  validaEmail(email) {
    var re = /\S+@\S+\.\S+/;
    let valido = re.test(email);
    return valido;
  }

  validaCPF(cpf) {
    var re = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;
    let valido = re.test(cpf);
    return valido;
  }

  login(email, senha) {
    if (email === this.email && senha === this.senha) {
      return "Login realizado com sucesso";
    } else {
      throw new Error("Autenticação falhou");
    }
  }
}

module.exports = User;
