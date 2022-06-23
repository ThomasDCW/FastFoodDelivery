import SCard from './style';

export default function Card({ label, picture, alt }) {
  return (
    <SCard>
      <h1>{label}</h1>
      <img src={picture} alt={alt} />
    </SCard>
  );
}
