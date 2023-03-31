import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      {/* <div style={{height:100,width:100}}></div> */}
      <About /> 
      {/* <div ></div> */}
      <Portfolio />
      {/* <div ></div> */}

      <Skills/>
      {/* <div ></div>  */}
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
