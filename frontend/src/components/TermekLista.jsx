import { useState, useEffect } from 'react';

import api from '../api/axiosInstance';
import TermekKartya from './TermekKartya';

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
      {
        termekek.map((termek) => (
          <TermekKartya key={termek.id} termek={termek} />
        ))
      }
    </div>
  )
}