Este é um projeto utilizando React com TypeScript, criado com Vite.

Tecnologias Utilizadas

React - Biblioteca para construção de interfaces de usuário.
TypeScript - Superset do JavaScript que adiciona tipagem estática.
Vite - Ferramenta de build rápida para desenvolvimento web moderno.
Axios - Cliente HTTP baseado em promessas.
Styled-components - Biblioteca para estilização de componentes utilizando CSS-in-JS.
React-icons - Coleção de ícones populares para React.
Jest - Estrutura de testes em JavaScript.

Para rodar a aplicação basta rodar os comandos

npm install - para instalar as dependencias

json-server data.json --port 5000 - para rodar o servidor com os dados do json

e depois basta rodar um npm run dev para subir em ambiente de desenvolvimento

caso faça o build e suba para ambiente de produção, comentar a primeira linha dos arquivos de testes com a importação do React


Observações:
Json-web-server - como foi utilizado essa lib para subir o servidor, foi criado 26 endpoints, já que cada chave do objeto o json-web-server transforma em um endpoint,
por isso foi criado 26 botões com os links.

E os children vieram como objetos e não como um array de objetos, então por isso foi utilizado o Object.values para conseguir realizar um map sobre cada children.