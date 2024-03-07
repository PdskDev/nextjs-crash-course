import Link from "next/link";

const GitHubUsersTable = ({ users }) => {

  return (
    <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Url</th>
              <th>Repos</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.avatar_url} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.login}</div>
                      <div className="text-sm opacity-50">{user.id}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <Link href={user.html_url}>View on GitHub</Link>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">Go To Repos</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default GitHubUsersTable;
