
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Item from "./pages/Item";




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item" element={<Item />} />
    </Routes>
  );
}

export default App;
