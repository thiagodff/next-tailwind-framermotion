import { GetServerSideProps } from "next";

export default function User({ username }) {
  return <div>User: {username}</div>;
}

// essa função irá rodar antes do componente como chamadas a apis
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await fetch("https://api.github.com/users/thiagodff");
  const data = await response.json();

  return {
    // tudo retornado pelas props estará disponível no componente
    props: {
      username: data.name,
    },
  };
};
