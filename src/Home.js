import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import KitapEkle from './KitapEkle';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import firebase from 'firebase';
import 'firebase/database';


class Home extends Component {

    
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
            <div className="container">
                    <KitapEkle />
            </div>
        );
    }
}

export default Home;
