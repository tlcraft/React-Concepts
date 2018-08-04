import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function Welcome(props) {
  let element;
  const user = props.user;

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

function tick() {
  const clock = (
      <div>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
  );
  ReactDOM.render(
    clock,
    document.getElementById('root')
  );
}
//setInterval(tick, 1000);

const user = {
  firstName: 'John',
  lastName: 'Doe'
}

ReactDOM.render(
    <Welcome user={user} />,
    //<Welcome user={null} />,
    document.getElementById('root')
);