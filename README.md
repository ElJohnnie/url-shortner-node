# Encurtador de URL

Este é um simples serviço de encurtamento de URL construído com Node.js e Express.

## Instalação

Certifique-se de ter o Node.js e o npm instalados em seu sistema. Em seguida, siga estas etapas:

1. Clone este repositório:

    ```
    git clone https://github.com/{{seu-usuario}}/{{seu-repositorio}}.git
    ```

2. Navegue até o diretório do projeto:

    ```
    cd {{seu-repositorio}}
    ```

3. Instale as dependências:

    ```
    npm install
    ```

## Uso

Para iniciar o servidor, execute o seguinte comando:

    npm run serve

O servidor será iniciado na porta 3000 por padrão. Você pode acessar o serviço de encurtamento de URL através do navegador ou usando ferramentas como cURL ou Postman.


### Encurtar uma URL

Envie uma solicitação GET para `/shorten` com o parâmetro `url` contendo a URL que deseja encurtar. Por exemplo:

   
    http://localhost:3000/shorten?url=https://www.example.com


Isso retornará a URL encurtada.

### Redirecionar

Para redirecionar para a URL original, basta acessar a URL encurtada retornada anteriormente.
