import { useEffect, useState } from "react";

export const UsersData = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        setUsers(
          data.map((user: { name: string }) => {
            user.name;
            // console.log(user.name);
          })
        )
      )
      .catch(() => {
        setError("Error fetching errors");
      });
  }, []);

  return (
    <div className="bg-cyan-950 px-5 py-10">
      <h1 className="text-3xl mt-2 text-white">Users</h1>
      {error && <p>{error}</p>}

      <ul className="text-3xl mt-2 text-white flex flex-col">
        {users.map((user) => (
          <li className="text-3xl mt-2 text-white" key={user}>
            User Details{user}
          </li>
        ))}
      </ul>
    </div>
  );
};
