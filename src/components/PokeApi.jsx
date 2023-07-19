/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const PokeApi = () => {
const [id] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon/1";
      const response = await fetch(url, {
        headers: {
          Appkey: "ABC123",
          AppToken: "Etc.",
        },
      });
      const data = await response.json();
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container my-5">
      <h2>PokeApi</h2>
      <hr />
      <p>Hola mundo</p>
    </div>
  );
};

export default PokeApi;
