import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./Movies";
import Actors from "./Actors";
import Footer from "./Footer";
import Form from "./MovieForm";
import ActorForm from "./ActorForm";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Switch>
            <Route path="/get-movies">
              <Movies />
            </Route>
            <Route path="/get-actors">
              <Actors />
            </Route>
            <Route path="/form-movies">
              <Form />
            </Route>
            <Route path="/form-actors">
              <ActorForm />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
