<h2 align="center">DOE SANGUE, DOE VIDA</h2>

<div align="center">
    <img src="https://i.pinimg.com/originals/b1/67/e2/b167e2bf540ad37e8b53e42b2c2e37a3.gif" width="500" height="350"/>
</div>

### Problematica
<p>
Segundo o Ministério da Saúde (OMS), o Brasil conta com 1.8% da população como doadores de sangue, enquanto o mínimo considerado adequado é de 3.5%. Em 2021, período de restabelecimento e cuidados aos efeitos da pandemia, os bancos de sangue conseguiram se reestabelecer devido ao lançamento de campanhas de incentivo à doação. Entretanto, esse aumento de doações de forma sazonal ainda não é considerado ideal. Em 2022, hemocentros de diversos estados promoveram o Dia Nacional do Doador de Sangue, em homenagem as pessoas que têm esse hábito de forma regular. A data escolhida foi 25 de novembro devido à proximidades com feriados e datas comemorativas, período marcado pela baixa nos estoques.
</p>

### O Projeto
<p>
Criado com o objetivo de informar a situação dos bancos de sangue e incentivar a doação regular, o projeto DOE SANGUE, DOE VIDA é um sistema que cadastra doadores aos bancos de sangue e notifica sua próxima doação.
</p>

### Tecnologias Utilizadas
> node, jest

### Funcionalidades implementadas
- Usuário
    [x] Criação de usuário
    [x] Validação de Email e CPF
    [x] Login

- Posto de Doação
    [x] Cadastrar novo posto de doação
    [x] Vincular doador ao banco de sangue
    [x] Listar Postos de doação por região

- Doador
    [x] Realizar doação
    [x] Atualizar data da próxima doação
   

### Como instalar

1. Fork esse repositório

2. Clonar repositório em sua máquina. Para isso digitar no terminal:

```sh
  $ git clone url-do-seu-repositorio-forkado
```

3. Entre na pasta do seu repositório

```sh
  $ cd nome-do-seu-repositorio-forkado
```

4. Instale as dependencias do projeto

```sh
  $ npm install 
```

5. Para testes de instancias e métodos, vá até a pasta *models* e digite no terminal

```sh
  $ node run index.js
```

6. Para rodar os testes unitários e verificar porcentagens de cobertura

```sh
  $ npx jest --coverage
```

### Implementações Futuras
[ ] Filtrar postos de doação por status crítico do banco de sangue, considerando tipo sanguineo do usuário;
[ ] Criação de novo usuário 'receptor', aqueles que buscam doação direta por tipo sanguíneo específico ou não;






