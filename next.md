# Next Js

O Next é uma ferramenta de SSR/SSG para o React.

Para criar um projeto com Next

```bash
npx create-next-app app-name
```

Cada arquivo da pasta pages é uma página da aplicação, dessa forma que é feito o roteamento. Toda pasta e sub-pasta criada em pages é refletido na url.

Adicionar typescript basta alterar a extensão dos arquivos e adicionar as dependências abaixo que assim que iniciar o projeto ele irá identificar que estamos usando typescript e ira realizar as configurações necessárias

```bash
yarn add --dev typescript @types/react @types/node
```

## SSR: Server Side Rendering

Para falar que uma página será renderizada em SSR, ou seja, dentro do servidor node do NextJs, precisamos exportar dentro do componente a função getServerSideProps

O código React só irá renderizar após o getServerSideProps executar, ou seja, tome cuidado com o tipo de ação executava, se ela demorar o usuário irá demorar para visualizar a página.

Os dados adquiridos na getServerSideProps são os que necessariamente precisam estar na página em um primeiro momento.

## SSG: Static Side Generating

Criação de sites estáticos com NextJs.

Basta exportar uma função chamada getStaticProps e irá funcionar de forma semelhante ao getServerSideProps, porém, ele irá executar essa função uma vez e irá gerar o arquivo do site estático correspondente.

É recomendado para sites que não irão ser alterado ou raramente alterados pois essa alteração somente ocorrerá na hora do build.

## Static

São páginas estáticas geradas pelo NextJs, nesse caso basta criar a página sem exporta nenhuma função extra.

## Parâmetros dinâmicos

Basta criar uma página nomeada com [nome-parâmetro] para ter acesso à esse parâmetro via props e pode utiliza-lo na página.

## Testes, Material UI, Styled-components

Lembrando que NextJs roda por cima do React, sendo assim, essas libs acima funcionam da mesma forma.

## API com NextJs

Como o NextJs roda em cima de um servidor node é possível utilizarmos esse servidor node como uma api utilizando o caminho pages/api.

Nesse caminho podemos utilizar a api em forma de serverless function.

Um dos casos de uso que faz sentido utilizar essa serverless function é para fazer a proteção da api, no lugar de expor a api essa serverless fica responsável por redirecionar as requisições e assim mantemos o acesso a nossa api em segredo.

## Devo utilizar NextJs para tudo?

Você deve analisar o contexto da aplicação, se por exemplo, na sua empresa toda aplicação interna é feita com React pode não valer a pena adicionar algo a mais para algo já estruturado, porém, o NextJs hoje resolve praticamente todos os problemas que o React resolve e de forma bem mais performática e com beneficio do SEO.

Lembre-se que NextJs é focado para front, utilize esse parte da api mais para serverless mesmo, como um proxy por exemplo.

## Migrando Create React App para NextJs

Na documentação explica e basicamente a migração irá criar um comportamento de primeiro procurar nas rotas do Next se contém aquela determinada rota, se não tiver, joga para o react renderizar.
