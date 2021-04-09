import React from 'react';


const formatDate=(date)=>(
    date.toLocaleDateString()
)

const Avatar=(props)=>(
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
)

const Comment=(props)=>(
    <div className="Comment">
      <Avatar user={props.author} />
      <div className="UserInfo">{props.author.name}</div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
)

export default Comment;
