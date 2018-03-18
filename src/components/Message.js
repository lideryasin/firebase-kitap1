import React, {Component} from 'react';

class Message extends Component {

  render(){
    return (
      <div>
        {this.props.message}
        {this.props.yazarAdi}
        {this.props.kitapKimde}
        {this.props.yayinEvi}
      </div>
    )
  }
}
export default Message;
