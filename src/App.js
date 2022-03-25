import "./App.css";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyGarden from "./components/MyGarden/MyGarden";
import ButterLettuce from "./components/ButterLettuce";
import Parsley from "./components/Parsley";
import "./styles/app.scss";
import { Switch, Route } from "react-router-dom";
import Explore from './components/Discover/Discover';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Stats} />
          <Route  path="/mygarden" component={MyGarden} />
          <Route path='/explore' component ={Explore} />
          <Route path='/butterlettuce' component={ButterLettuce}/>
          <Route path='/parsley' component={Parsley}/>
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
