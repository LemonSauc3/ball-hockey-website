import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Player = () => {
  const router = useRouter();
  const [player, setPlayer] = useState("");
  useEffect(() => {
    if (router.isReady) {
      console.log(router.query.player);
      setPlayer(router.query.player);
    }
  }, [router.isReady]);

  return (
    <div>
      <h1>Player Page</h1>
      <h2>Player ID: {player}</h2>
    </div>
  );
};

export default Player;
