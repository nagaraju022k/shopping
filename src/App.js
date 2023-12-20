
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Trenary from './components/Trenary.js';
import Navbar from './components/Navbar.js';
import './App.css';
// import Profile from "./components/userdashboard/Profile.js";
// import Userdata from "./components/userdashboard/Userdata.js";
import Dashboard from "./components/userdashboard/Dashboard.js";
import Login from "./components/Login/Login.js";


function App() {
  // const [date, setDate] = useState(new Date());
  return (
    <>
   <sqaure value={[0]} />


   <BrowserRouter>
   
   <Routes>
     <Route path="/" element={<Navbar   />}>
     <Route index element={<Trenary />} />
     <Route path="profile" element={<Dashboard />} />
     <Route path="login" element={<Login />} />
    
       
       
       
     </Route>
   </Routes>
 </BrowserRouter>

    {/* <div>
    <DatePicker
      showTimeSelect
      minTime={new Date(0, 0, 0, 1, 0 )}
      maxTime={new Date(0, 0, 0, 24, 0)}
      selected={date}
      onChange={date => setDate(date)}
      dateFormat="MMMM d, yyyy h:mmaa"
    />
  </div>
  <Trenary /> */}
  </>
   );

}

export default App;
