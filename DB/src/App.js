import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import StudentLogin from './Home/StudentLogin/StudentLogin';
import Student from '../src/Home/StudentLogin/Student/Student';
import FacultyLogin from './Home/FacultyLogin/FacultyLogin';
import AdminLogin from './Home/AdminLogin/AdminLogin';
import Admin from '../src/Home/AdminLogin/Admin/Admin';
import { AuthProvider } from '../src/AuthContext';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
// import PieChart from "./components/PieChart";

Chart.register(CategoryScale);

function App() {
  return (
    <Router>
      <AuthProvider>
          <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/studentlogin' element={<StudentLogin />}></Route>
                 <Route exact path='/student' element={< Student />} />
                 <Route exact path='/facultylogin' element={< FacultyLogin />}></Route>
                 <Route exact path="/adminlogin" element={< AdminLogin />} />
                 <Route exact path='/admin' element={< Admin />} />
          </Routes>
        </AuthProvider>
    </Router>
  );
}

export default App;
