
import GitHubUsersTable from "../components/GitHubUsersTable";


async function fetchGitHubUsers() {
  const res = await fetch("https://api.github.com/search/users?q=nadet");
  const json = await res.json();
  return json.items;
}

const GitHubUsersPage = async () => {
  const users = await fetchGitHubUsers();

  return (
    <div>
      <h1>GitHub Users</h1>
      <GitHubUsersTable users={users}/>
    </div>
  );
};

export default GitHubUsersPage;
