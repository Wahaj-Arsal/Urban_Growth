/** @format */

import "./styles/app.scss";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import MyGarden from "./components/MyGarden/MyGarden";
import Discover from "./components/Discover/Discover";

function App() {
  return (
    <div className="App">
      <Stats />
      <Footer />
      <MyGarden />
      <Discover />
    </div>
  );
}

export default App;
