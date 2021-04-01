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
