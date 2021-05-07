import { GetStaticProps } from "next";

export default function StaticUser({ username }) {
  return <div>User: {username}</div>;
}

// mesma ideia do getServerSideProps porém no build gera o arquivo estático
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/thiagodff");
  const data = await response.json();

  return {
    props: {
      username: data.name,
    },
  };
};
