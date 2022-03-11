import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer bienvenida="Hola bienvenido a Birbo Birbs y Journals" />
    </>
  );
}

export default App;
