import Card from './Card';
import Gallery from './Gallery';
import Header from './Header';
import GlobalStyle from './style';

function App() {
  return (
    <GlobalStyle>
      <Header />
      <section className='titleContainer'>
        <h1>Fast</h1>
        <div className='titleSubContainer'>
          <h2>Food</h2>
          <h2>Delivery</h2>
        </div>
      </section>
      <Gallery />
    </GlobalStyle>
  );
}

export default App;
