import ".//App.css";
import Slider from "./Components/Slider";
import NavigationBar from "./Components/NavigationBar";
import About from "./Components/About";
import Footer from "./Components/Footer";

function UncontrolledExample() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Slider></Slider>
      <About></About>
      <Footer></Footer>
    </>
  );
}

export default UncontrolledExample;
