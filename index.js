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

function Clock(props) {
  const clock = (
      <div id={props.id}>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
  );
  return clock;
}

function tick() {
  ReactDOM.render(
    <Clock id='clock' date={new Date()} />,
    document.getElementById('clock')
  );
}

setInterval(tick, 1000);

const user = {
  firstName: 'John',
  lastName: 'Doe'
}

function App() {
  return (
    <div>
      <Welcome user={user} />
      <Welcome user={null} />
      <Clock id='clock' date={new Date()}/>
    </div>
  );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);