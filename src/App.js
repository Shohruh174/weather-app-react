import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  HomePage,
  SingleCityPage
} from './pages'

import './assets/main.scss'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/city/:cityName" component={SingleCityPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;