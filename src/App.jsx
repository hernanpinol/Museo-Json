import {Fragment} from 'react';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <ItemListContainer greeting='Bienvenidos a nuestra tienda oficial!' />
    </Fragment>
  );
}

export default App;
