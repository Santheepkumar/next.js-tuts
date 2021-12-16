/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import UsersList from "../../components/UsersList";

export async function getServerSideProps(context) {
  const url = context.query.filter
    ? `https://jsonplaceholder.typicode.com/users/?q=${context.query.filter}`
    : "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(url);
  const users = await res.json();

  return {
    props: {
      users,
    }, // will be passed to the page component as props
  };
}

export default function index({ users }) {
  // const [users, setUsers] = useState([]);

  // useEffect(async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const users = await res.json();
  //   setUsers(users);
  // }, []);

  return <UsersList users={users} />;
}
