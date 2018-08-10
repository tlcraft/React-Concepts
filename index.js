import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function UserGreeting(props) {
  return (
    <div>
        <h1 className="title">
          Hello, {formatName(user)}!
        </h1>
        <h2>
          Good to see you!
        </h2>
      </div>
  );
}

function GuestGreeting(props) {
  return (
    <div>
        <h1 className="title"
          >Hello, stranger.
        </h1>
        <h2>
          Nice to meet you!
        </h2>
        {new Date().getHours() > 17 &&
          <div>
            <a href="#">Special deals!</a>
          </div>
        }
    </div>
  );
}

function Welcome(props) {
  const user = props.user;

  if (user) {
    return <UserGreeting user={user} />
  } else {
    return <GuestGreeting />
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      id: 'clock'
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const month = this.state.date.getMonth();
    const clock = (
        <div id={this.state.id}>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          {month > 5 && month < 9 ?
            <p>Enjoy summer!</p> :
            <p>Summer will be back</p>
          }
        </div>
    );
    return clock;
  }
}

function WarningBanner(props) {
  // returning null will hide a component but lifecycle events will still fire
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make 'this' work in the callback
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <button className={this.state.isToggleOn ? "on" : "off"} onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>  
        <WarningBanner warn={!this.state.isToggleOn} />
      </div>    
    );
  }
}

function AccountButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.title}
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <AccountButton onClick={this.handleLogoutClick} title='Logout' />;
    } else {
      button = <AccountButton onClick={this.handleLoginClick} title='Login' />;
    }

    return (
      <div>
        {button}
      </div>
    )
  }
}

const user = {
  firstName: 'John',
  lastName: 'Doe'
}
const numbers = [1, 2, 3, 4, 5];
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number*2}</li>);

  return (
    <ul>{listItems}</ul>
  );
}

function App() {
  return (
    <div>
      <Welcome user={user} />
      <Welcome user={null} />
      <Clock />
      <Clock />
      <Toggle />
      <LoginControl />
      <NumberList numbers={numbers}/>
    </div>
  );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);