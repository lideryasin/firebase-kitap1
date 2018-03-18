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
    var config = {
      apiKey: "AIzaSyCgYcHwfwhQbrx_Ux_AvCqIkSn3mzog_Mo",
      authDomain: "react1-697c3.firebaseapp.com",
      databaseURL: "https://react1-697c3.firebaseio.com",
      projectId: "react1-697c3",
      storageBucket: "react1-697c3.appspot.com",
      messagingSenderId: "190614813192"
    };
    firebase.initializeApp(config);
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
