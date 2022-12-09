const Doador = require("../models/doador");
const Endereco = require("../models/endereco");

describe("verifica etapas de login e validação", () => {
  const endereco1 = new Endereco(
    "Nome da rua",
    "Vila Silva",
    "180",
    "São Paulo",
    "SP",
    "Zona Leste"
  );
  const doador1 = new Doador();
  doador1.criaUsuario(
    "Ana",
    "123.234.233-09",
    "maria@email.com",
    "1234",
    endereco1,
    "O+"
  );
  test("deve retornar true para autenticação do doador", () => {
    expect(doador1.login("maria@email.com", "1234")).toEqual(
      "Login realizado com sucesso"
    );
  });

  test("deve retornar erro para autenticação do doador com senha inválida", () => {
    expect(() => {
      doador1.login("maria@email.com", "3333");
    }).toThrow();
  });

  test("deve retornar erro para autenticação do doador com email inválido", () => {
    expect(() => {
      doador1.login("maria", "1234");
    }).toThrow();
  });

  test("deve retornar erro na instanciação do usuário com email inválido", () => {
    const doador2 = new Doador();
    expect(() => {
      doador2.criaUsuario(
        "João",
        "222.222.333-90",
        "joaojoao",
        "1234",
        endereco1,
        "O+"
      );
    }).toThrow();
  });

  test("deve retornar erro na instanciação do usuário com CPF inválido", () => {
    const doador2 = new Doador();
    expect(() => {
      doador2.criaUsuario(
        "João",
        "200000",
        "joao@email.com",
        "1234",
        endereco1,
        "O+"
      );
    }).toThrow();
  });
});
