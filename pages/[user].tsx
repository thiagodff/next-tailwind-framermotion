import { GetStaticPaths, GetStaticProps } from "next";

export default function UserParams({ username }) {
  // precisamos verificar se o window existe para poder utilizar
  // o window.addEventListener por exemplo
  const isBrowser = typeof window !== "undefined";

  return <div>User via params: {username}</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // aqui será definido paths pré carregados estaticamente, é obrigatório pelo menos um
    // quando estive em produção o next irá criar novas páginas estáticas
    // conforme elas forem sendo acessadas sem a necessidade de informar aqui nos paths
    paths: [
      {
        params: {
          user: "thiagodff",
        },
      },
      {
        params: {
          user: "CarlosLevir",
        },
      },
    ],
    // o que deve fazer enquanto a página está carregando o que precisa
    fallback: "blocking", // espera carregar, se coloca true no componente tem que
    // verificar se a variável ja está disponível ou não
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { user } = params;

  const response = await fetch(`https://api.github.com/users/${user}`);
  const data = await response.json();

  return {
    props: {
      username: data.name,
    },
  };
};

// Para o serverSideProps funciona normal
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { user } = params;

//   const response = await fetch(`https://api.github.com/users/${user}`);
//   const data = await response.json();

//   return {
//     props: {
//       username: data.name,
//     },
//   };
// };
