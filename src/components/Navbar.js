import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Kitap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/KitapEkle" activeClassName="active" className="nav-link" href="">Kitap Ekle</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/KitapListele" activeClassName="active" className="nav-link" href="">Kitap Listele</Link>
                            </li>
                        </ul>
                        
                    </div>
                </nav>

            </div>
        );
    }
}

export default Navbar;


