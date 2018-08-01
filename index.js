import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return (
    <h1>
      Hello, {formatName(user)}!
    </h1>
    );
  } else {
    return (
    <h1>
      Hello, stranger.
    </h1>
    );
  }
}

const user = {
  firstName: 'John',
  lastName: 'Doe'
}

ReactDOM.render(
    getGreeting(user),
    //getGreeting(null),
    document.getElementById('root')
);