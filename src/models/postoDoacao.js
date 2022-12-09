const Doador = require("./doador");

class PostoDoacao {
  nome;
  endereco;
  banco;
  pessoasCadastradas = [];
  static all = [];

  constructor(nome, endereco, banco) {
    this.nome = nome;
    this.endereco = endereco;
    this.banco = banco;
    PostoDoacao.all.push(this);
  }

  cadastrarDoador(doador) {
    if (doador instanceof Doador) {
      this.pessoasCadastradas.push(doador);

      return `Doador ${doador.nome} cadastrado com sucesso`;
    } else {
      throw new Error(`doador deve ser uma instancia da classe Doador`);
    }
  }

  static buscaPostoDoacaoPorRegiao(regiao) {
    const PostosPorRegiao = PostoDoacao.all.filter(
      (postos) => postos.endereco.regiao === regiao
    );

    console.log(PostosPorRegiao);
    return PostosPorRegiao;
  }
}

module.exports = PostoDoacao;
