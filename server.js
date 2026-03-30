//Importações
const express = require("express"); //Framework que cria o servidor e as rotas
const { criarBanco } = require("./database"); //A chave que vai abrir a conexão com o banco de dados

const cors = require("cors"); //Middleware para permitir requisições de diferentes origens (domínios)
const app = express(); //inicialização: Ligando o motor do servidor

// ------------ ATIVANDO OS PACOTES ----------//
app.use(cors()); //"ATIVANDO O CORS" Configurar o CORS para permitir requisições de diferentes origens
app.use(express.json()); //Tradutor: Configurar o express

//|Criando a rota principal / Rota raiz

app.get("/", (req, res) => {
  res.send(`
        <body>
            <h1> ZelaCidade </h1>
            <h2> Gestão de Problemas Urbanos </h2>
            <p> Endpont que leva os incidentes cadastrados: /incidentes </p>
        </body>
            `);
});

//Rota de Listagem - Para buscar todos os problemas registrados
app.get("/incidentes", async (req, res) => {
  const db = await criarBanco(); // Chamamos a função do outro arquivo. O await é o "aguarde", pois o banco precisa de tempo para abrir.
  const listaIncidentes = await db.all(`SELECT * FROM incidentes`);
  res.json(listaIncidentes); //Entrega esses dados para o cliente em formato JSON
});
/*

app.get("/incidentes", async (req, res) => {
    const db = await criarBanco() // 
    
    const listaIncidentes = 
})
*/

// Rota especifica

app.get("/incidentes/:id", async (req, res) => {
  const { id } = req.params;

  const db = await criarBanco();

  const incidenteEspecifico = await db.all(
    `SELECT * FROM incidentes WHERE id = ? `,
    [id],
  );
  // ? é um espaço reservado que será preenchido pelo valor da variavel [id]
  // ? SQL injection é usado para segurança
  res.json(incidenteEspecifico);
});

//Rota novos registros

app.post("/incidentes/", async (req, res) => {
  const {
    tipo_problema,
    localizacao,
    descricao,
    prioridade,
    nome_solicitante,
    data_registro,
    hora_registro,
  } = req.body;

  const db = await criarBanco();

  await db.run(
    `INSERT INTO incidentes(tipo_problema,
    localizacao,
    descricao,
    prioridade,
    nome_solicitante,
    data_registro,
    hora_registro) VALUES (?, ?, ?, ?, ?, ?, ?)`,

    // [] ARRAY
    [
      tipo_problema,
      localizacao,
      descricao,
      prioridade,
      nome_solicitante,
      data_registro,
      hora_registro,
    ],
  );

  //Envia uma resposta de confirmação para o cliente que fez a requisição.
  res.send(
    `Novo incidente registrado: ${tipo_problema} registrado na data ${data_registro} por ${nome_solicitante} no horário ${hora_registro}`,
  );
});

// Rota de atualização

app.put("/incidentes/:id", async (req, res) => {
  //pega o ID do incidente que vem pela a URL (ex: /incidentes/4)
  const { id } = req.params;

  //Pega os novos dados enviados no corpo da requisição (O que será atualizado)
  const { descricao, prioridade, status_resolucao } = req.body;

  //Abre a conexão com o banco de dados.
  const db = await criarBanco();

  await db.run(
    `
    UPDATE incidentes SET descricao = ?, prioridade = ?, status_resolucao = ? 
    WHERE id = ?`,
    [descricao, prioridade, status_resolucao, id],
  );

  //Enviar uma resposta para o cliente
  res.send(`O incidente de ${id} foi atualizada com sucesso`);
});

//Rota de remoção

app.delete("/incidentes/:id", async (req, res) => {
  const { id } = req.params;

  const db = await criarBanco();

  await db.run(
    `
    DELETE FROM incidentes WHERE id = ? 
    `,
    [id],
  );

  res.send(`O incidente do id ${id} foi removido com sucesso!`);
});

// Porta do servidor

// Criando uma variável inteligente para a porta do servidor, que pode ser definida por uma variável de ambiente (process.env.PORT) ou usar a porta 3000 como padrão.

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
