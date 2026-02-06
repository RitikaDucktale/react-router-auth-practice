import { Suspense, lazy, useState } from "react";

import { useUserContext } from "../../context/UserContext";

import Loader from "../loader/Loader";
const UserCards = lazy(() => import("../userCards/UserCards"));
import styles from "./Display.module.css";

const DisplayUsers = () => {
  console.log('DisplayUSers renders*****')
  const { users, setUsers, isLoading, setLoading } = useUserContext();
  return (
    <div className={styles.cardsContainer}>
      {users.map((user) => (
        // <Suspense key={user?.login?.uuid || user.email} fallback={<Loader />}>
          <UserCards user={user} key={user?.login?.uuid || user.email} />
        // </Suspense>
      ))}
    </div>
  );
};

export default DisplayUsers;
