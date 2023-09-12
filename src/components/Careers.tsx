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
  title: string;
  salary: number;
  location: string;
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
              <p>Title - {token.title}</p>
              <p>Based in - {token.location}.</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  return res.json();
};
