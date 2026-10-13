import { useState, useEffect } from 'react';

import api from '../api/axiosInstance';
import RendelesKartya from './RendelesKartya';

export default function RendelesLista() {
  const [rendelesek, setRendelesek] = useState([]);

  useEffect(() => {
    const fetchRendelesek = async () => {
      try {
        const response = await api.get('/rendelesek');
        setRendelesek(response.data);
      } catch (error) {
        console.error('Hiba a rendelések lekérésekor:', error);
      }
    };

    fetchRendelesek();
  }, []);

  return (
    <div>
      <h2>Rendelések</h2>
      {
        rendelesek.map((rendeles) => (
          <RendelesKartya key={rendeles.id} rendeles={rendeles} />
        ))
      }
    </div>
  )
}