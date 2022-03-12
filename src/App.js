import { Routes, Route} from "react-router-dom";
import "./App.css";
import Admindashboard from "./pages/Admindashboard";
import Auth from "./pages/Auth";
import Jobseekerdashboard from "./pages/Jobseekerdashboard";
import Customerdashboard from "./pages/Customerdashboard";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <main>
         <Routes>
             <Route path={'/user/*'} >
             <Route path="login" element={<Login />} />
             <Route path="signup" element={<Auth />} />
             </Route>
           
           <Route path="/jobseeker/*"   element={<Jobseekerdashboard/>}/>
           <Route path="/admin/*"   element={<Admindashboard/>}/>
           <Route path="/jobprovider/*"   element={<Customerdashboard/>}/>
          </Routes>
      </main>
    </div>
  );
}

export default App;
