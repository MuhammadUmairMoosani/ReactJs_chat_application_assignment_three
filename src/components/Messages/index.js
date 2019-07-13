import React from "react";
import "./styles.css";

const Messages = props => {
  const { message, senderId, receiverId, send, msg, value } = props;
  return (
    <div className="container">
      <div className="message">
        {message.map(msg => {
          if (msg.sender_id === msg.receiver_id) return;
          return (msg.sender_id == senderId && msg.receiver_id == receiverId) ||
            (msg.sender_id == receiverId && msg.receiver_id == senderId) ? (
            <div
              className={
                senderId === msg.sender_id ? "senderCon" : "receiverCon"
              }
            >
              <span
                className={senderId === msg.sender_id ? "sender" : "receiver"}
              >
                {msg.msg}
              </span>
              <br />
            </div>
          ) : null;
        })}
      </div>
      <div className="send">
        <input
          onChange={text => msg(text.target.value)}
          value={value}
          type="text"
          className="input"
        />
        <button
          className="sendButton"
          onClick={senderId !== receiverId && send}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Messages;
