import React from "react";
import User from "../User";
import Messages from "../Messages";
import "./styles.css";

class Home extends React.Component {
  state = {
    user: [
      {
        id: 1,
        name: "Faiz Ahmed"
      },
      {
        id: 2,
        name: "Arfa Karim"
      },
      {
        id: 3,
        name: "Ali"
      },
      {
        id: 4,
        name: "Maria Toorpakai"
      }
    ],
    message: [],
    receiver_id: 0,
    sender_id: 0,
    userMsg: ""
  };
  _receiverHandler = receiver_id => {
    this.setState({ receiver_id });
  };
  _senderHandler = sender_id => {
    this.setState({ sender_id });
  };
  _sendMessage = () => {
    const { message, userMsg, sender_id, receiver_id } = this.state;
    message.push({
      msg: userMsg,
      sender_id: sender_id,
      receiver_id: receiver_id
    });
    this.setState({ message: message, userMsg: "" });
  };
  _messageHandler = msg => {
    this.setState({ userMsg: msg });
  };
  render() {
    const { user, receiver_id, message, userMsg, sender_id } = this.state;
    return (
      <div>
        {/* Header */}
        <div className="header"> CHAT APPLICATION </div>
        {/* components */}
        <div>
          <div className="components">
            <div className="user">
              <User
                users={user}
                sender={this._senderHandler}
                receiver={this._receiverHandler}
                id={receiver_id}
                senderID={sender_id}
              />
            </div>
            <div className="messages">
              <Messages
                value={userMsg}
                msg={this._messageHandler}
                id={receiver_id}
                send={this._sendMessage}
                senderId={sender_id}
                receiverId={receiver_id}
                message={message}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
