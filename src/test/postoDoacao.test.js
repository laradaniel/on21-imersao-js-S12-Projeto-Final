const Doador = require("../models/doador");
const Endereco = require("../models/endereco");
const PostoDoacao = require("../models/postoDoacao");

describe("verifica instancia e métodos da classe postoDoacao", () => {
  const endereco1 = new Endereco(
    "Nome da rua",
    "Vila Silva",
    "180",
    "São Paulo",
    "SP",
    "Zona Leste"
  );
  const endereco2 = new Endereco(
    "Nome de outra rua",
    "Vila Souza",
    "1111",
    "São Paulo",
    "SP",
    "Zona Leste"
  );
  const endereco3 = new Endereco(
    "Nome de uma rua",
    "Vila Souza",
    "1111",
    "São Paulo",
    "SP",
    "Zona Oeste"
  );
  const postoDoacao1 = new PostoDoacao("Hospital Santa Helena", endereco2, {});
  const postoDoacao2 = new PostoDoacao("Hospital São Luis", endereco3, {});

  const doador1 = new Doador();
  doador1.criaUsuario(
    "Maria",
    "123.234.233-09",
    "maria@email.com",
    "1234",
    endereco1,
    "O+"
  );
  test("deve cadastrar um doador ao posto de doação", () => {
    expect(postoDoacao1.cadastrarDoador(doador1)).toBe(
      "Doador Maria cadastrado com sucesso"
    );
  });

  test("deve retornar erro ao tentar cadastrar um doador não instanciado pela classe Doador", () => {
    expect(() => {
      postoDoacao1.cadastrarDoador(doador2);
    }).toThrow();
  });

  test("deve retornar erro ao tentar cadastrar doador que não foi instanciado da classe Doador", () => {
    expect(() => {
      const doador2 = ''
      postoDoacao1.cadastrarDoador(doador2);
    }).toThrow('doador deve ser uma instancia da classe Doador');
  });

  test("deve retornar lista de postos de doação filtrada por região", () => {
    let listaPostosZonaLeste =
      PostoDoacao.buscaPostoDoacaoPorRegiao("Zona Leste");
    expect(listaPostosZonaLeste[0].nome).toContain("Hospital Santa Helena");
  });
});
