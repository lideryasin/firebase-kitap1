import React, { Component } from 'react';
import trim from 'trim';
import firebase from 'firebase';
import 'firebase/database';
import 'firebase/storage';


var config = {
  apiKey: "AIzaSyCgYcHwfwhQbrx_Ux_AvCqIkSn3mzog_Mo",
  authDomain: "react1-697c3.firebaseapp.com",
  databaseURL: "https://react1-697c3.firebaseio.com",
  projectId: "react1-697c3",
  storageBucket: "react1-697c3.appspot.com",
  messagingSenderId: "190614813192"
};


class MessageBox extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.on2 = this.on2.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.text = this.text.bind(this);

    this.state = {
      message: '',
      yazarAdi: '',
      kitapKimde: 'Şeref Keser CIO',
      yayinEvi: 'Abaküs',
      uploading: false,
      percent: 0,
      file: '',
      error: '',
      text: ''
    };
  }
  onChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  onChange2(e) {
    this.setState({
      yazarAdi: e.target.value
    });
  }

  handleChange2(event) {
    this.setState({ kitapKimde: event.target.value });
  }

  handleChange(event) {
    this.setState({ yayinEvi: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }


  onKeyup(e) {
    if (e.keyCode === 13 && trim(e.target.value) !== '') {
      e.preventDefault();
      let dbCon = this.props.db.database().ref('/messages');
      dbCon.push({
        message: trim(e.target.value)
      });
      this.setState({
        message: ''
      });
    }
  }

  on2(e) {

    e.preventDefault();
    var dbCon = this.props.db.database().ref('/messages');
    dbCon.push({
      message: trim(this.state.message),
      yazarAdi: trim(this.state.yazarAdi),
      kitapKimde: trim(this.state.kitapKimde),
      yayinEvi: trim(this.state.yayinEvi),
    });
    this.setState({
      message: '',
      yazarAdi: '',
      kitapKimde: 'Şeref Keser CIO',
      yayinEvi: 'Abaküs',
    });

  }

  onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ file: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  handleFileSelect(e) {
    this.setState({ file: e.target.files[0] })
  }

  handleFileUpload() {

    const storageRef = firebase.storage().ref();
    this.setState({ uploading: true })
    storageRef.child(this.state.text)
      .put(this.state.file)
      .then(snap => {
        this.setState({ uploading: false })
      })
      .catch(err => this.setState({ error: err.message }))


   /*  var filename = Selection.name;
      var storageRef2 = firebase.storage().ref('ss.png');
      var uploadTask = storageRef.put(this.handleFileSelect)
      var downloadUrl = uploadTask.snapshot.downloadUrl;
      console.log(downloadUrl)*/
      

   /* var storage = firebase.storage();
    var pathReference = storage.ref('ss.png');


    //kaydet
    /*
    var dbCon = this.props.db.database().ref('/posts');
    dbCon.push({
      imageUrl: trim(pathReference),
    });
    this.setState({
      imageUrl: '',
    });*/
  
  }

  text(e) {
    this.setState({
      text: e.target.value
    })
  }


  render() {
    return (
      <div className="container">
        <form>
          <input type="text"
            className="form-control mr-sm-2 search" aria-label="Search"
            placeholder="Kitap Adı"
            onChange={this.onChange}
            onKeyUp={this.onKeyup}
            value={this.state.message}>
          </input>

          <input type="text"
            className="form-control mr-sm-2 search" aria-label="Search"
            placeholder="Yazar Adı"
            onChange={this.onChange2}
            onKeyUp={this.onKeyup}
            value={this.state.yazarAdi}>
          </input>

          <label>
            Kitap Kimde :
            <select className="custom-select" value={this.state.kitapKimde} onChange={this.handleChange2}>
              <option value="Şeref Keser CIO">Şeref Keser CIO</option>
              <option value="Çağatay Çiftçi Üniversite 3.Sınıf">Çağatay Çiftçi İ.Ü 3.Sınıf </option>
              <option value="Muhammed B. Aydemir Üniversite 3.Sınıf">Muhammed B. Aydemir İ.Ü 3.Sınıf</option>
              <option value="Yasin Elüstü Lise Son Sınıf">Yasin Elüstü  BTML Lise Son Sınıf</option>
              <option value="Binnur Övecek Lise Son Sınıf">Binnur Övecek Lise Son Sınıf</option>
              <option value="Abdülkerim Yapıcı">Abdülkerim Yapıcı</option>
              <option value="Oskay Karagülmez">Oskay Karagülmez</option>
              <option value="Kübra Köse Üniversite Son Sınıf">Kübra Köse Üniversite Son Sınıf</option>
              <option value="Emircan Kavas İ.Ü Bilgisayar Mühendisi">Emircan Kavas İ.Ü Bilgisayar Mühendisi</option>
              <option value="Burakcan Çiftçi Lise Son Sınıf">Burakcan Çiftçi Lise Son Sınıf</option>
              <option value="Göktem Sağlamoğlu bulurum.com ITI Manager">Göktem Sağlamoğlu bulurum.com ITI Manager</option>
              <option value="Emre Saykal Üniversite Bilgisayar Mevzunu">Emre Saykal Üniversite Bilgisayar Mevzunu</option>
              <option value="İbrahim Cevher Kadadayı Endüstri 3. Sınıf">İbrahim Cevher Kadadayı Endüstri 3. Sınıf</option>
              <option value="Mustafa Akgöl Bilgisayar Mühendisi Mevzunu">Mustafa Akgöl Bilgisayar Mühendisi Mevzunu</option>
              <option value="Beyhur Kaya Bilgisyar Mühendisi Mevzunu">Beyhur Kaya Bilgisyar Mühendisi Mevzunu</option>
              <option value="Nurican Özcan">Nurican Özcan</option>
              <option value="Fonex ERP">Fonex ERP</option>

            </select>
          </label>


          <form onSubmit={this.handleSubmit}>
            <label>
              Yayın evleri :
            <select className="custom-select" value={this.state.yayinEvi} onChange={this.handleChange}>
                <option value="Abaküs">Abaküs</option>
                <option value="Kültür Yayınları">Kültür Yayınları</option>
                <option value="Koridor">Koridor</option>
                <option value="Optimist Yayın Grubu">Optimist Yayın Grubu</option>
                <option value="MediaCat">MediaCat</option>
                <option value="Cinius Yayınları">Cinius Yayınları</option>
                <option value="Derin Yayınları">Derin Yayınları</option>
                <option value="Elma">Elma</option>
                <option value="Level">Level</option>
                <option value="Umuttepe Yayınları">Umuttepe Yayınları</option>
                <option value="Boğaziçi Üniversite Yayınları">Boğaziçi Üniversite Yayınları</option>
                <option value="Nobel Yaşam">Nobel Yaşam</option>
                <option value="Aba Yayın">Aba Yayın</option>
                <option value="Boyut">Boyut</option>
                <option value="Nobel">Nobel</option>
                <option value="aura">aura</option>
                <option value="Aptimist">Aptimist</option>
                <option value="Pusula">Pusula</option>
                <option value="Tübisad akademi">Tübisad akademi</option>
                <option value="domingo">domingo</option>
                <option value="Beta Kitap">Beta Kitap</option>
              </select>
            </label>




            <div className='container'>
              <div className='form'>
                <img id="target" src={this.state.file} />
                <input type="text" onChange={this.text} />
                <input type="file" onChange={this.handleFileSelect} />
                <button onClick={this.handleFileUpload}>Yükle</button>
              </div>
              {this.state.uploading
                ? <div>
                  <div className='load-bar' />
                  <span>Uploading: {this.state.percent}%</span>
                </div>
                : ''
              }
              <pre>
                <code>
                  {this.state.error ? <span className='error'>{this.state.error}</span> : ''}
                  {JSON.stringify(this.state.file, null, 2)}
                </code>
              </pre>
            </div>

          </form> <hr />
          <button className="btn btn-outline-success" onClick={this.on2}>Kaydet</button>
        </form>

      </div>
    )
  }
}

export default MessageBox
