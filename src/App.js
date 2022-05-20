import Navbars from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Navbars />
      <Home />
      <About/>
      <Skills/>
      <Work />
      <Contact />
    </div>
  );
}

export default App;
