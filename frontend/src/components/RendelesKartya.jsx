export default function RendelesKartya({ rendeles }) {
  return (
    <div key={rendeles.id}>
      <p>Vevő ID: {rendeles.vevo_id}</p>
      <p>Termék ID: {rendeles.termek_id}</p>
      <p>Mennyiség: {rendeles.mennyiseg}</p>
      <p>Rendelés ideje: {rendeles.rendeles_ideje}</p>
    </div>
  );
}