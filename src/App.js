/** @format */

import "./styles/app.scss";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import MyGarden from "./components/MyGarden/MyGarden";

function App() {
  return (
    <div className="App">
      <Stats />
      <Footer />
      <MyGarden />
    </div>
  );
}

export default App;
