
import './App.css';
import {Route,Routes} from "react-router-dom";
import HOMES from './Routes/HOMES';
import ABOUTS from './Routes/ABOUTS';
import CONTACTS from './Routes/CONTACTS';
import SIGN from './Routes/SIGN';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HOMES/>}/>
        <Route path="/ABOUT" element={<ABOUTS/>}/>
        <Route path="/CONTACT" element={<CONTACTS/>}/>
        <Route path="/SIGN" element={<SIGN/>}/>

      </Routes>

    </div>
  );
}

