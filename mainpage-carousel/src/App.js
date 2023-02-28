import "./App.css";
import Carousel from "react-bootstrap/Carousel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://hips.hearstapps.com/hmg-prod/images/tropical-beach-at-sunset-royalty-free-image-1655673364.jpg"
              alt="Workout"
            />
            <Carousel.Caption>
              <h2>COFO Concept</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
