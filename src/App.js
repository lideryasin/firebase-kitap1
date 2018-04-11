import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import KitapEkle from './KitapEkle';
import KitapListele from './KitapListele';
import firebase from 'firebase';
import 'firebase/database';


class App extends Component {

  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/KitapEkle" component={KitapEkle}/>
            <Route path="/KitapListele" component={KitapListele}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
