import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';
import './search.css'

function searchingFor(term){
  return function(x){
    return x.message.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
    let app = this.props.db.database().ref('messages');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });

    this.searchHandler = this.searchHandler.bind(this);
  }



  searchHandler(event){
    this.setState({term: event.target.value})
  }

  getData(values){
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
    const {term, messages} = this.state;
    let messageNodes = this.state.messages.filter(searchingFor(term)).map((message) => {
      return (
        <div>
        <div className="card">
          <div className="card-content">
            <Message message = {message.message} />
          </div>
        </div>
        </div>
      )
    });
    return (
      <div>
          <form>
        <input type="text" className="form-control mr-sm-2 search"  placeholder="Search" aria-label="Search" onChange={this.searchHandler} />
      </form>
        {messageNodes}
      </div>
    );
  }
}

export default MessageList
