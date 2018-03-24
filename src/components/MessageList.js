import React, { Component } from 'react';
import Message from './Message';
import _ from 'lodash';
import './search.css';
import firebase from 'firebase';
import 'firebase/database';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function searchingFor(term) {
  return function (x) {
    return x.message.toLowerCase().includes(term.toLowerCase()) || !term + x.yayinEvi.toLowerCase().includes(term.toLowerCase()) || !term + x.yazarAdi.toLowerCase().includes(term.toLowerCase()) || !term + x.kitapKimde.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    let app = this.props.db.database().ref('messages');
    app.on('value', snapshot => {
      console.log(snapshot.val())
      this.getData(snapshot.val());
    });

    this.searchHandler = this.searchHandler.bind(this);
  }

  componentWillUnmount() {
    this.props.db.database().ref('messages').off('value');
  }



  searchHandler(event) {
    this.setState({ term: event.target.value })
  }

  getData(values) {
    let messagesVal = values;
    let messages = _(messagesVal)
      .keys()
      .map(messageKey => {
        let cloned = _.clone(messagesVal[messageKey]);
        cloned.key = messageKey;
        return cloned;
      })
      .value();
    this.setState({
      messages: messages,
      term: '',
    });

    this.searchHandler = this.searchHandler.bind(this);
  }



  render() {
    const { term, messages } = this.state;
    let messageNodes = this.state.messages.filter(searchingFor(term)).map((message) => {
      return (
        <AccordionItem key={message.key} expanded={this.state.activeBookKey === message.key}>
          <div className="card">
            <div className="card-content">
              <div className="panel-group">
                <div className="panel panel-default">
                  <AccordionItemTitle>
                    <p onClick={() => this.setState({ activeBookKey: message.key })}>{message.message}</p>
                  </AccordionItemTitle>
                  <AccordionItemBody className="panel-heading" data-trigger={message.message} >
                    <ul className="list-group">
                      <li className="list-group-item"><Message message={message.yayinEvi} /></li>
                      <li className="list-group-item"><Message message={message.yazarAdi} /></li>
                      <li className="list-group-item"><Message message={message.kitapKimde} /></li>
                    </ul>
                  </AccordionItemBody>
                  {/* <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" href="#collapse1"><Message message={message.message} /></a>
                    </h4>
                  </div>
                  <div id="collapse1" className="panel-collapse collapse">
                    <ul className="list-group">
                      <li className="list-group-item"><Message message={message.yayinEvi} /></li>
                      <li className="list-group-item"><Message message={message.yazarAdi} /></li>
                      <li className="list-group-item"><Message message={message.kitapKimde} /></li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </AccordionItem>
      )
    });
    return (
      <div>
        <form>
          <input type="text" className="form-control mr-sm-2 search" placeholder="Search" aria-label="Search" onChange={this.searchHandler} />
        </form>
        <Accordion accordion>
          {messageNodes}
        </Accordion>
      </div>
    );
  }
}

export default MessageList

/*   <div>
        <div className="card">
          <div className="card-content">
            <Message message = {message.message} />
          </div>
        </div>
        </div>*/
