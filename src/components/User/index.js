import React from "react";
import "./styles.css";

const User = props => {
  const { users, receiver, id, senderID, sender } = props;
  return (
    <div className="container">
      {users.map(user => (
        <div key={user.name}>
          <button
            className="button"
            style={id === user.id ? { backgroundColor: "#ff800052" } : {}}
            onClick={() => receiver(user.id)}
            onDoubleClick={() => sender(user.id)}
          >
            {senderID === user.id && <div className="userSelector" />}
            {user.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default User;
