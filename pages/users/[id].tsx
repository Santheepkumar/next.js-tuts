import { useRouter } from "next/router";
import UserDetail from "../../components/UserDetail";

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    paths: users.map((user) => ({
      params: { id: user.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}

export default function Index({ user }) {
  return <UserDetail user={user} />;
}
