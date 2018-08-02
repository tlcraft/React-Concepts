import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  let element;

  if (user) {
    element = (
      <div>
        <h1 className="title">
          Hello, {formatName(user)}!
        </h1>
        <h2>
          Good to see you!
        </h2>
      </div>
    );
  } else {
    element = (
      <div>
        <h1 className="title"
          >Hello, stranger.
        </h1>
        <h2>
          Nice to meet you!
        </h2>
      </div>
    );
  }

  return element;
}

const user = {
  firstName: 'John',
  lastName: 'Doe'
}

ReactDOM.render(
    //getGreeting(user),
    getGreeting(null),
    document.getElementById('root')
);