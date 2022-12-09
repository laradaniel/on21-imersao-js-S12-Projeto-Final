const Doador = require("../models/doador");
const Endereco = require("../models/endereco");

describe("verifica instancias e métodos da classe Doador", () => {
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
    "Maria",
    "123.234.233-09",
    "maria@email.com",
    "1234",
    endereco1,
    "O+"
  );
  doador1.realizaDoacao(new Date("12/07/2022"));

  test("atualiza data da ultima doação", () => {
    expect(doador1.getUltimaDoacao()).toEqual("07/12/2022");
  });

  test("atualiza data da próxima doação ao realizar nova", () => {
    expect(doador1.proximaDoacao).toEqual("07/04/2023");
  });

  test("deve notificar sobre a próxima doação", () => {
    expect(doador1.notificaProximaDoacao()).toEqual(
      "Sua próxima doação pode ser realizada a partir de 07/04/2023"
    );
  });
});
