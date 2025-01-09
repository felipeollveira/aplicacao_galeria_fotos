# Galeria de Fotos

Este é um projeto de uma galeria de fotos, onde os usuários podem buscar imagens com base em palavras-chave. O projeto utiliza React para renderizar as fotos. 
Utilizo a API em 
https://jsonplaceholder.typicode.com/

## Funcionalidades

- **Busca em tempo real**: As fotos são filtradas conforme o usuário digita na barra de pesquisa, existe uma latencia de 900ms ao usuario digitar para evitar buscas a cada palavra digitada, isso tambem economiza requisicoes. A busca é realizada a partir de um conjunto inicial de 50 fotos.
- **Limitação de resultados**: Quando o usuário realiza uma busca, a galeria exibe no máximo 10 fotos de cada vez e diminui conforme a pesquisa se torna especifica ate chegar a 0 ou 1.
- **Carregamento assíncrono**: As fotos são carregadas de forma assíncrona utilizando uma API, com exibição de um esqueleto de carregamento enquanto as imagens estão sendo recuperadas.
- **Exibição de erro**: Se houver um erro na busca das fotos (como um problema de rede ou de servidor), uma mensagem de erro será exibida.

## Tecnologias Utilizadas

- **React**: Utilizado para construir a interface interativa.
- **Bootstrap**: Para o estilo e o layout responsivo.

## Estrutura do Código

O código está estruturado com o objetivo de separar responsabilidades de maneira eficiente:

- **`Gallery`**: Componente principal que contém a lógica de exibição das fotos, controle do estado da busca e renderização da galeria.
- **`SearchBar`**: Componente que exibe a barra de pesquisa e trata a interação do usuário com a pesquisa.
- **`PhotoCard`**: Componente responsável por renderizar uma única imagem.
- **`SkeletonCard`**: Componente que simula o carregamento das imagens (um esqueleto de carregamento), muito utilizado em sites como youtuube, instagram etc

## Como Funciona a Busca

O fluxo da busca é baseado na variável `initialSubset`, que armazena um conjunto inicial de 50 fotos que são carregadas na primeira vez que o componente é montado. Este conjunto de imagens é então filtrado conforme o usuário digita na barra de pesquisa.

Armazeno as 50 primeiras fotos carregadas da API numa variavel e faco a busca por essa variavel, visando um alto acesso, nao teria sobrecarga na api

Existe uma variavel que armazena as fotos que correspondem ao termo de pesquisa atual. Sempre que o usuário digita algo, `filteredPhotos` é atualizado com os resultados filtrados.

- **Filtro**: O filtro é realizado utilizando o título da foto. Ele compara o texto da pesquisa com o título de cada foto e exibe as fotos que contêm esse termo.

## Como Rodar o Projeto
1. Clone o repositório
2. Navegue para a pasta do projeto:
3. Instale as dependências:
4. Inicie o servidor de desenvolvimento:
````bash
git clone https://github.com/felipeollveira/aplicacao_galeria_fotos
cd aplicacao_galeria_fotos
npm install
npm start
