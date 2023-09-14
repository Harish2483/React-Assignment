/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";

// type careerProps = {
//   id: number;
//   salary: number;
//   location: string;
//   title: string;
// };
type Token = {
  id: number;
  name: string;
  email: string;
};

type TokenData = {
  careers: Token[];
};

export const Careers = () => {
  const { careers } = useLoaderData() as TokenData;
  console.log(careers);
  //   const careers = useLoaderData();

  return (
    <div>
      <div>
        <h1>Data</h1>

        {careers &&
          careers.map((token: Token) => (
            <Link to="/" key={token.id}>
              <p>Title - {token.name}</p>
              <p>Based in - {token.email}.</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export const careersLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
