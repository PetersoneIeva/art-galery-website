import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Location from './pages/Location';

import Footer from './components/Footer';

import './sass/App.sass';


function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/location" element={<Location/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
