# Next Js

O Next é uma ferramenta de SSR/SSG para o React.

Para criar um projeto com Next

```bash
npx create-next-app app-name
```

Cada arquivo da pasta pages é uma página da aplicação, dessa forma que é feito o roteamento

Adicionar typescript basta alterar a extensão dos arquivos e adicionar as dependências abaixo que assim que iniciar o projeto ele irá identificar que estamos usando typescript e ira realizar as configurações necessárias

```bash
yarn add --dev typescript @types/react @types/node
```

## SSR: Server Side Rendering

Para falar que uma página será renderizada em SSR, ou seja, dentro do servidor node do NextJs, precisamos exportar dentro do componente a função getServerSideProps

O código React só irá renderizar após o getServerSideProps executar, ou seja, tome cuidado com o tipo de ação executava, se ela demorar o usuário irá demorar para visualizar a página.

Os dados adquiridos na getServerSideProps são os que necessariamente precisam estar na página em um primeiro momento.
