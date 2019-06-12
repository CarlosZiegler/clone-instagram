rocketseat-week

INDEX:JS
Arquivo index é o ponto de entrada da nossa aplicacao, ela que permite nos trabalhar-mos com rotas com o EXPRESS,
divide o servidor para que ele suport HTTP e WEBSOCKET .

Faz a conexao com o Banco de Dados. 

Disponibiliza websocket para nossas rotas na aplicacao.

Utiliza o CORS para que todos os enderecos tenha acesso para nossa aplicao, sem isso o React nao consegue conectar em nossa aplicacao.

Cria um rota para acessar arquivos estaticos que sao as imagens que fizemos UPLOAD na pasta UPLOADS/RESIZED.

Cria um arquivo separado de Rotas para declarar nossas rotas da aplicacao.

ROUTERS.JS
Tem a configuracao do Multer que é utilizado na rota de upload de Post. 
Essa configuracao do Multer permite que o Express do Node leia o Body da requisicao http.

Criado rota para criar post e dar Like

CONTROLLERS

Dentro dos controllers estao detalhadas as rotas.

POSTCONTROLLER.JS

Responsavel pela logica da rota, recebe os dados do post, cria o post no banco de dados, altera o tamanho da imagem.

LIKECONTROLLER.JS

Rota para dar o Like, recebe o id do post e soma 1 like e salva o post devolvendo o post atualizado.

MODELS/POST.JS

Uma representacao da nossa tabela no formato de JAVASCRIPT do Banco de dados, que nao é tabela e sim um documento, pois é usado modelo NOSQL

CONFIG/UPLOAD
Configuracao do Multer para o nome e destino de onde sera salvo o arquivo recebido

