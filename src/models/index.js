const PostoDoacao = require("./postoDoacao");
const Endereco = require("./endereco");
const Doador = require("./doador");
const BancoSangue = require("./bancoSangue");

// Instanciando Endereços
const endereco1 = new Endereco(
  "Rua Alameda Santos",
  "Vila Silva",
  "133",
  "São Paulo",
  "SP",
  "Zona Leste"
);
const endereco2 = new Endereco(
  "Avenida Marco Antonio",
  "Vila Souza",
  "1111",
  "São Paulo",
  "SP",
  "Zona Leste"
);
const endereco3 = new Endereco(
  "Rua do Imigrante",
  "São Gonçalo",
  "345",
  "São Paulo",
  "SP",
  "Zona Oeste"
);

//Instanciando Banco de Sangue
const bancoHospitalSantaHelena = new BancoSangue(
  [{ porcentagem: "20%", status: "crítico" }],
  [{ porcentagem: "10%", status: "crítico" }],
  [{ porcentagem: "20%", status: "crítico" }],
  [{ porcentagem: "40%", status: "alerta" }],
  [{ porcentagem: "70%", status: "estável" }],
  [{ porcentagem: "60%", status: "estável" }],
  [{ porcentagem: "03%", status: "crítico" }],
  [{ porcentagem: "01%", status: "crítico" }]
);
const bancoHospitalSaoLuis = new BancoSangue(
  [{ porcentagem: "20%", status: "crítico" }],
  [{ porcentagem: "10%", status: "crítico" }],
  [{ porcentagem: "20%", status: "crítico" }],
  [{ porcentagem: "40%", status: "alerta" }],
  [{ porcentagem: "70%", status: "estável" }],
  [{ porcentagem: "60%", status: "estável" }],
  [{ porcentagem: "03%", status: "crítico" }],
  [{ porcentagem: "01%", status: "crítico" }]
);

// Instanciando Postos de Doação
const postoDoacao1 = new PostoDoacao(
  "Hospital Santa Helena",
  endereco2,
  bancoHospitalSantaHelena
);
const postoDoacao2 = new PostoDoacao(
  "Hospital São Luis",
  endereco3,
  bancoHospitalSaoLuis
);
console.log(postoDoacao1);
console.table(postoDoacao1.banco);
console.log(postoDoacao2);
console.table(postoDoacao2.banco);

// Instanciando Doadores
const doador1 = new Doador();
doador1.criaUsuario(
  "Maria",
  "123.234.233-09",
  "maria@email.com",
  "1234",
  endereco1,
  "O+"
);

//Realiza Login
doador1.login("maria@email.com", "1234");

// Cadastro de Doadores ao Postos de Doação
postoDoacao1.cadastrarDoador(doador1);
console.log(postoDoacao1.pessoasCadastradas);

//Busca Postos de Doação por região
PostoDoacao.buscaPostoDoacaoPorRegiao("Zona Oeste");

// Doador realiza uma doação
doador1.realizaDoacao(new Date());
console.log("última doação: ", doador1.getUltimaDoacao());

// Retorna data da próxima doação
doador1.notificaProximaDoacao();
