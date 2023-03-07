const Teams = ({ teams }) => {
  return (
    <>
      <h1>Teams Page</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.name}>
            <div className="flex flex-row space-x-2">
              <h1>{team.name}</h1>
              <h2>{team.team_captain}</h2>
              <h3>{team.team_size}</h3>
              <h3>{team.division}</h3>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://127.0.0.1:8000/api/teams");
  const teams = await res.json();

  return {
    props: { teams },
  };
}

export default Teams;
