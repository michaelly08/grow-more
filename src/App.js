import "./styles.css"
import {Link, Switch, Route, Routes, BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import Properties from "./components/Properties"
import Property from "./components/Property"
import Employees from "./components/Employees"
import Member from "./components/Member"
import Footer from "./components/Footer"
import Steps from "./components/Steps"
import Form from "./components/Form"
import Policy from "./components/Policy";
import Diligence from "./components/Diligence";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();






function App() {
  return (
    <BrowserRouter>
            <div className="whole-project">
                <div className="navbar-page">
                <Navbar />
                    <Routes>
                        <Route path="/" exact element={<Homepage />}/>
                        <Route path="/properties" element={<Properties />}/>
                        <Route path="/property/:cat/:propertyId" element={<Property />}/>
                        <Route path="/team" element={<Employees />}/>
                        <Route path="/member/:id" element={<Member slide={false}/>}/>
                        <Route path="/procedures" element={<Steps/>}/>
                        <Route path="/form" element={<Form/>}/>
                        <Route path="/policy" element={<Policy/>}/>
                        <Route path="/diligence" element={<Diligence/>}/>


                    
                    </Routes>
                <Footer />
                </div>
            </div>
        </BrowserRouter>
  );
}

export default App;
