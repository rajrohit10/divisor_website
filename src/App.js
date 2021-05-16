import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import FillerSection from "./components/FillerSection";
import AboutUs from "./components/AboutUs";
import LearningModel from "./components/LearningModel";
import Pointers from "./components/Pointers";
import PopularMini from "./components/PopularMini"
import Footer from "./components/Footer";
import Filler2 from "./components/Filler2";
import Filler3 from "./components/Filler3";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <div className="first-section">
        <div className="container">
          <Navbar />
          <Header />
        </div>
      </div>
      <div className="container">
        <FillerSection />
        <AboutUs />
        
        </div>
        <Filler3/>
        <div className="container">
        <LearningModel />
        <Pointers />
        <PopularMini/>
       
      </div>
      <Filler2/>
      <div className="container">
        <Testimonials/>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
