
import { BrowserRouter , Routes,Route} from 'react-router-dom';
import Home from './componets/Home';
import Register from './componets/Register';
import Navbar from './componets/Navbar';
import ViewStudent from './componets/ViewStudent';

function App() {
  
  return (
 <BrowserRouter>
 <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/Register" element={<Register></Register>}></Route>
    <Route path="/view/name" element={<ViewStudent></ViewStudent>}></Route>
  </Routes>

 </BrowserRouter>
  );
}

export default App;
