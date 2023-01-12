
import { BrowserRouter , Routes,Route} from 'react-router-dom';
import Home from './componets/Home';
import Register from './componets/Register';
import Navbar from './componets/Navbar';
import DeleteStudent from './componets/DeleteStudent';

function App() {
  
  return (
 <BrowserRouter>
 <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/Register" element={<Register></Register>}></Route>
    <Route path="/delete/rollno" element={<DeleteStudent></DeleteStudent>}></Route>
  </Routes>

 </BrowserRouter>
  );
}

export default App;
