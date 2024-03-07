async function fetchGitHubUsers(){
    const res = await fetch('https://api.github.com/search/users?q=pdskdev');
    const json = await res.json();
    return json.items;
}

const GitHubUsersPage = async() => {
    const user = await fetchGitHubUsers();
    console.log(user);
  return (
    <div>
        <h1>GitHub Users</h1>
    </div>
  )
}

export default GitHubUsersPage;