import { useState, useEffect } from 'react';

import api from '../api/axiosInstance';

export default function TermekLista() {
  const [termekek, setTermekek] = useState([]);

  useEffect(() => {
    const fetchTermekek = async () => {
      try {
        const response = await api.get('/termekek');
        setTermekek(response.data);
      } catch (error) {
        console.error('Hiba a termékek lekérésekor:', error);
      }
    };

    fetchTermekek();
  }, []);

  return (
    <div>
      <h2>Termékek</h2>
      <ul>
        {
          termekek.map((termek) => (
            <li key={termek.id}>
              <h3>{termek.nev}</h3>
              <p>Ár: {termek.ar} Ft</p>
              <p>Készlet: {termek.keszlet}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}