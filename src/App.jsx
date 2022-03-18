import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';

import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  
  return (
    <>
      <NavBar />
      <ItemListContainer bienvenida="Hola bienvenido a Birbo Birbs y Journals" />
      <ItemDetailContainer detalles="Detalles del producto"/>
    </>
  );
}

export default App;
