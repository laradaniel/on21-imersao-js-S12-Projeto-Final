class Endereco {
  rua;
  bairro;
  numero;
  cidade;
  estado;
  regiao;

  constructor(rua, bairro, numero, cidade, estado, regiao) {
    this.rua = rua;
    this.bairro = bairro;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
    this.regiao = regiao;
  }
}

module.exports = Endereco;
