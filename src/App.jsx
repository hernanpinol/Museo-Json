import {Fragment} from 'react';
import ItemDetailContainer from './components/ItemDetailConteiner/itemDetailConteiner';
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <ItemDetailContainer />
    </Fragment>
  );
}

export default App;
