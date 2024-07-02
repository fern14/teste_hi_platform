<h1>Este é um projeto utilizando React com TypeScript, criado com Vite.</h1>

Tecnologias Utilizadas

<ul>
<li>React - Biblioteca para construção de interfaces de usuário.</li>
<li>TypeScript - Superset do JavaScript que adiciona tipagem estática.</li>
<li>Vite - Ferramenta de build rápida para desenvolvimento web moderno.</li>
<li>Axios - Cliente HTTP baseado em promessas.</li>
<li>Styled-components - Biblioteca para estilização de componentes utilizando CSS-in-JS.</li>
<li>React-icons - Coleção de ícones populares para React.</li>
<li>Jest - Estrutura de testes em JavaScript.</li>
</ul>

Para rodar a aplicação basta rodar os comandos

<strong>npm install</strong> - para instalar as dependencias

<strong>json-server data.json --port 5000</strong> - para rodar o servidor com os dados do json

caso rodar <strong>json-server data.json --port 5000</strong> não funcione basta instalar a biblioteca <strong>npm install -g json-server</strong>

e depois basta rodar um npm run dev para subir em ambiente de desenvolvimento

caso faça o build e suba para ambiente de produção, comentar a primeira linha dos arquivos de testes com a importação do React


<h3>Observações:</h3>
Json-web-server - como foi utilizado essa lib para subir o servidor, foi criado 26 endpoints, já que cada chave do objeto o json-web-server transforma em um endpoint,
por isso foi criado 26 botões com os links.

![image](https://github.com/fern14/teste_hi_platform/assets/85141697/92943f16-adeb-4557-b03c-ca2f45ebe168)


E os children vieram como objetos e não como um array de objetos, então por isso foi utilizado o Object.values para conseguir realizar um map sobre cada children.
