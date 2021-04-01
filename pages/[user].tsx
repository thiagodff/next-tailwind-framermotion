import { GetStaticPaths, GetStaticProps } from "next";

export default function UserParams({ username }) {
  const isBrowser = typeof window !== "undefined";
  // e assim podemos verificar para poder utilizar window.addEventListener por ex

  return <div>User via params: {username}</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // aqui será definido paths pré carregados estaticamente, é obrigatório pelo menos um
    paths: [
      {
        params: {
          user: "thiagodff",
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
