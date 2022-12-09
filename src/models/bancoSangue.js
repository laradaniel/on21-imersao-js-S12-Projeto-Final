class BancoSangue {
  a_positivo;
  a_negativo;
  b_positivo;
  b_negativo;
  ab_positivo;
  ab_negativo;
  o_positivo;
  o_negativo;

  constructor(
    a_positivo,
    a_negativo,
    b_positivo,
    b_negativo,
    ab_positivo,
    ab_negativo,
    o_positivo,
    o_negativo
  ) {
    this.a_positivo = a_positivo;
    this.a_negativo = a_negativo;
    this.b_positivo = b_positivo;
    this.b_negativo = b_negativo;
    this.ab_positivo = ab_positivo;
    this.ab_negativo = ab_negativo;
    this.o_positivo = o_positivo;
    this.o_negativo = o_negativo;
  }
}

module.exports = BancoSangue;
