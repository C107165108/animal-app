import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function Comment(props) {
   return (
    <div className="Comment">
      <Avatar user={props.author} />
      <div className="UserInfo">{props.author.name}</div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
  
}

export default Comment;
