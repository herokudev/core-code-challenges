import React, { useEffect, useState } from 'react';

const Lista = () => {
  const [data, setData] = useState([]);
  const llamarLista = async () => {
    const respuesta = await fetch('http://localhost:5000/dbtodos');
    const respuestaJson = await respuesta.json();
    console.log(respuestaJson);
    setData(respuestaJson);
  };

  useEffect(() => {
    llamarLista();
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Lista;
