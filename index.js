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

function Tick(props) {
  const clock = (
      <div>
        <h2>It is {props.time}.</h2>
      </div>
  );
  return clock;
}

function tick() {
  return (
    <Tick time={new Date().toLocaleTimeString()} />
  );
}
// TODO update clock state correctly
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
      <Tick time={new Date().toLocaleTimeString()}/>
    </div>
  );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);