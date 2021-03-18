import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Article from './components/Article';
import Categories from './components/Categories';
import Header from "./components/Header";
import Search from './components/Search';
import TopNews from './components/TopNews';
import './main.css'



function App() {

  const [country, setCountry] = useState('gb')

  return (
    <Router>

      <Header setCountry={setCountry} />

      <Switch>

        <Route exact path='/categories'>
          <Categories country={country} />
        </Route>

        <Route exact path='/search'>
          <Search />
        </Route>

        <Route exact path='/article' component={Article} />



        <Route exact path='/topnews'>
          <TopNews country={country} />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;

