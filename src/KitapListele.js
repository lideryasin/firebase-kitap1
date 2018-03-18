import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import firebase from 'firebase';
import 'firebase/database';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';


class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="WELCOME" subtitle="“Bir kitap okuyan her şeyi bildiğini zanneder. İkinci kitabı okuyan kuşkuya düşer. Üçüncü kitabı okuyan hiçbir şey bilmediğini anlar.” Frederick Pollock" />
                <div className="container">
                    <MessageList db={firebase} />
                </div>
            </div>
        );
    }
}

export default Home;
