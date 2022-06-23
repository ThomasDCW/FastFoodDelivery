import Card from '../Card';
import SGallery from './style';

const datas = [
  { id: 1, label: 'Breakfast', picture: 'src/assets/breakfast.jpg' },
  { id: 2, label: 'Lunch', picture: 'src/assets/lunch.jpg' },
  { id: 3, label: 'Dinner', picture: 'src/assets/dinner.jpg' },
];
export default function Gallery() {
  return (
    <SGallery>
      {datas.map((data) => {
        return <Card key={data.id} label={data.label} picture={data.picture} />;
      })}
    </SGallery>
  );
}
