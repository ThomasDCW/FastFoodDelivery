import SearchBar from '../SearchBar';
import SHeader from './style';

const labels = [
  {
    id: 1,
    title: 'Home',
  },
  {
    id: 2,
    title: 'Menu',
  },
  {
    id: 3,
    title: 'Contact',
  },
  {
    id: 4,
    title: 'Shop',
  },
];

export default function Header() {
  return (
    <SHeader>
      <ul>
        {labels.map((label) => {
          return <li key={label.id}>{label.title}</li>;
        })}
      </ul>
      <SearchBar />
    </SHeader>
  );
}
