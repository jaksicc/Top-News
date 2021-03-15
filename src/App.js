import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Categories from './components/Categories';
import Header from "./components/Header";
import Search from './components/Search';
import TopNews from './components/TopNews';
import './main.css'


function App() {

  const [country, setCountry] = useState('gb')
  console.log(country)
  return (
    <Router>

      <Header setCountry={setCountry}/>

      <Switch>

        <Route path='/categories'>
          <Categories />
        </Route>

        <Route path='/serach'>
          <Search />
        </Route>

        <Route path='/'>
          <TopNews country={country}/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;

