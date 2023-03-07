import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Players = () => {
  const router = useRouter();
  const [team, setTeam] = useState("");
  useEffect(() => {
    if (router.isReady) {
      setTeam(router.query.team);
    }
  }, [router.isReady]);
  return (
    <>
      <div>{team}</div>
    </>
  );
};

export default Players;
